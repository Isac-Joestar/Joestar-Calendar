"use client"
import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function HandleSubmit(e: React.FormEvent){
        e.preventDefault()
        
        try{
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            })

            const data = await res.json()
            console.log("Resposta da API:", data);
           
            if (!res.ok) {
                alert(`Erro ao registrar: ${data.message || "Erro"}`);
                return;
            }
        } catch (err){
            console.error(err)
            alert('erro de conexão com o servidor')
        }
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