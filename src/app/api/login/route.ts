import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '@/models/user'
import connectMongoDB from '@/lib/mongodb'

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: Request) {
  await connectMongoDB()
  const { email, password } = await req.json()

  try {
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      return NextResponse.json(
        { message: 'Usuário não encontrado' },
        { status: 404 },
      )
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return NextResponse.json({ message: 'Senha incorreta' }, { status: 401 })
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    })

    return NextResponse.json(
      { message: 'Login realizado com sucesso', token },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao realizar login' },
      { status: 500 },
    )
  }
}
