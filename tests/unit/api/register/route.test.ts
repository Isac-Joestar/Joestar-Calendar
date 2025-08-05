import { mockPrisma } from '../../../mocks/prisma'
jest.mock('@/src/lib/prisma', () => ({
  prisma: mockPrisma,
}))
import { POST } from '@/src/app/api/register/route'

class MockRequest {
  body: any

  constructor(body: any) {
    this.body = body
  }

  async json() {
    return this.body
  }
}

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => Promise.resolve(data),
      status: init?.status || 200,
      ...init,
    })),
  },
}))

describe('POST /api/register', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('falhar se o e-mail já estiver cadastrado', async () => {
    const req = new MockRequest({
      firstname: 'João',
      lastname: 'Silva',
      email: 'teste@gmail.com',
      password: '123456',
      role: 'Client',
    }) as any

    ;(mockPrisma.user.findUnique as jest.Mock).mockResolvedValue({
      id: '123',
      email: 'teste@gmail.com',
    })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data).toHaveProperty('message', 'Usuário já cadastrado')
  })

  it('retorna 500 se ocorrer um erro no servidor', async () => {
    const req = new MockRequest({
      firstname: 'João',
      lastname: 'Silva',
      email: 'teste@gmail.com',
      password: '123456',
      role: 'Client',
    }) as any

    mockPrisma.user.findUnique.mockRejectedValue(new Error('Database Error'))

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.message).toBe('Erro ao criar usuário')
  })

  it('deve falhar se os dados forem inválidos', async () => {
    const req = new MockRequest({
      firstname: 'João',
      lastname: 'Silva',
      email: 'teste.com',
      password: '123456',
      role: '',
    }) as any

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.message).toBe('Dados inválidos')
  })

  it('deve registrar se os dados forem válidos', async () => {
    const req = new MockRequest({
      firstname: 'João',
      lastname: 'Silva',
      email: 'teste@gmail.com',
      password: '123456',
      role: 'Client',
    }) as any

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(201)
    expect(data.message).toBe('Usuário criado com sucesso')
  })
})
