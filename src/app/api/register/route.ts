import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '@/src/lib/prisma'
import { z } from 'zod'

const userSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['Client', 'Provider']),
  phone: z.string().optional(),
  service: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const parsed = userSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ message: 'Dados inválidos' }, { status: 400 })
    }

    const { firstname, lastname, email, password, role, phone, service } = body

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json(
        { message: 'Usuário já cadastrado' },
        { status: 400 },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        role,
        phone,
        service: role === 'Provider' ? service : null,
      },
    })

    return NextResponse.json(
      { message: 'Usuário criado com sucesso' },
      { status: 201 },
    )
  } catch (error) {
    console.error('Erro no registro:', error)
    return NextResponse.json(
      { message: 'Erro ao criar usuário' },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
