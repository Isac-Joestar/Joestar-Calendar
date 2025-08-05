import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '@/src/lib/prisma'

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables.')
}
const JWT_SECRET = process.env.JWT_SECRET

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email e senha são obrigatórios' },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, password: true },
    })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { message: 'Credenciais inválidas' },
        { status: 401 },
      )
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    })

    return NextResponse.json(
      { message: 'Login realizado com sucesso', token },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro ao realizar login:', error)
    return NextResponse.json(
      { message: 'Erro interno no servidor' },
      { status: 500 },
    )
  }
}
