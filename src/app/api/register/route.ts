import {NextResponse} from "next/server"
import bcrypt from "bcrypt";
import User from "@/models/user";
import connectMongoDB from '@/lib/mongodb';

export async function POST(req: Request) {
    await connectMongoDB();

    try{
        const body = await req.json();
        const {firstName, lastName, email, password, role, phone, service } = body;
        
        if(!firstName || !lastName || !email || !password || !role){
            return NextResponse.json(
                {message: "Preencha todos os campos obrigatórios"}, 
                {status: 400}
            )
        }

        const existingUSer = await User.findOne({email});;
        if(existingUSer){
            return NextResponse.json(
                {message: "Usuário já cadastrado"},
                {status: 400}
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            phone,
            service: role === "Provider" ? service : ''
        });

        await newUser.save();

        return NextResponse.json(
            {message: "Usuário criado com sucesso"},
            {status: 201}
        )
    }catch(error){
        console.log("Erro no registro:", error)
        return NextResponse.json(
            {message: "Erro ao criar usuário"},
            {status: 500}
        )
    }
}