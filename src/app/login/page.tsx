"use client"
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function HandleSubmit(e: React.FormEvent){
        e.preventDefault
        alert(`
            Login Successful,
            E-mail: ${email}
            Senha: ${password}
        `);
    }

    return(
        <main className="flex items-center justify-center h-screen w-screen ">
            <form onSubmit={HandleSubmit} className="w-[500px] h-[700px] bg-white rounded-[10px] py-[10px] px-[10px] flex flex-col gap-1.5 items-center">
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>
                <input 
                    type="password" 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>
                <button type="submit" className="h-8  w-[100px] border-2 rounded-[5px] text-black cursor-pointer">Entrar</button>
            </form>
        </main>
    )
}

export default Login;