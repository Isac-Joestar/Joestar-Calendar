import { mockPrisma } from '../../../mocks/prisma'
jest.mock('@/src/lib/prisma', () => ({
  prisma: mockPrisma,
}))

jest.mock('bcrypt')
jest.mock('jsonwebtoken')
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => Promise.resolve(data),
      status: init?.status || 200,
      ...init,
    })),
  },
}))

import { POST } from '@/src/app/api/login/route'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class MockRequest {
  body: any

  constructor(body: any) {
    this.body = body
  }

  async json() {
    return this.body
  }
}

const mockCompare = bcrypt.compare as jest.Mock
const mockSign = jwt.sign as jest.Mock

describe('POST /api/login', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  beforeAll(() => {
    process.env.JWT_SECRET = 'test-secret'
  })

  it('retorna 400 se email ou senha não forem fornecidos', async () => {
    const req = new MockRequest({ email: '', password: '' }) as any

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.message).toBe('Email e senha são obrigatórios')
  })

  it('retorna 401 se o usuário não existir', async () => {
    const req = new MockRequest({
      email: 'teste@email.com',
      password: '123',
    }) as any

    mockPrisma.user.findUnique.mockResolvedValue(null)

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(401)
    expect(data.message).toBe('Credenciais inválidas')
  })

  it('retorna 401 se a senha estiver incorreta', async () => {
    const req = new MockRequest({
      email: 'teste@email.com',
      password: '123',
    }) as any

    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'abc123',
      email: 'teste@email.com',
      password: 'hashedpassword',
    })

    mockCompare.mockResolvedValue(false)

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(401)
    expect(data.message).toBe('Credenciais inválidas')
  })

  it('retorna token se login for bem-sucedido', async () => {
    const req = new MockRequest({
      email: 'teste@email.com',
      password: '123',
    }) as any

    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'abc123',
      email: 'teste@email.com',
      password: 'hashedpassword',
    })

    mockCompare.mockResolvedValue(true)
    mockSign.mockReturnValue('fake-jwt-token')

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.token).toBe('fake-jwt-token')
    expect(data.message).toBe('Login realizado com sucesso')
  })

  it('retorna 500 se ocorrer um erro no servidor', async () => {
    const req = new MockRequest({
      email: 'teste@email.com',
      password: '123',
    }) as any

    mockPrisma.user.findUnique.mockRejectedValue(new Error('Database error'))

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.message).toBe('Erro interno no servidor')
  })
})
