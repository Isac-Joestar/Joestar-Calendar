import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstname, lastname, email, password, role, phone, service } = body

    if (!firstname || !lastname || !email || !password || !role) {
      return NextResponse.json(
        { message: 'Preencha todos os campos obrigatórios' },
        { status: 400 },
      )
    }

    const existingUSer = await prisma.user.findUnique({ where: { email } })
    if (existingUSer) {
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
    console.log('Erro no registro:', error)
    return NextResponse.json(
      { message: 'Erro ao criar usuário' },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
