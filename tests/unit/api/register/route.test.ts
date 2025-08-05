import { POST } from '@/src/app/api/register/route'
// import bcrypt from 'bcrypt'
import { prisma } from '@/src/lib/prisma'
import { resetMocks } from '@/tests/mocks/prisma'

class MockRequest {
  body: any

  constructor(body: any) {
    this.body = body
  }

  async json() {
    return this.body
  }
}

jest.mock('@/src/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    $disconnect: jest.fn(),
  },
}))

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => Promise.resolve(data),
      status: init?.status || 200,
      ...init,
    })),
  },
}))

// jest.mock('bcrypt')
// const mockHash = bcrypt.hash as jest.Mock

describe('POST /api/register', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    resetMocks()
  })

  it('falhar se o e-mail já estiver cadastrado', async () => {
    const req = new MockRequest({
      firstname: 'João',
      lastname: 'Silva',
      email: 'teste@gmail.com',
      password: '123456',
      role: 'Client',
    }) as any

    ;(prisma.user.findUnique as jest.Mock).mockResolvedValue({
      id: '123',
      email: 'teste@gmail.com',
    })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data).toHaveProperty('message', 'Usuário já cadastrado')
  }, 10000)
})
