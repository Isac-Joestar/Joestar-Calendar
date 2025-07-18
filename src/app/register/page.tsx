"use client"
import { useState } from "react"

function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole ] = useState("");
    const [phone, setPhone] = useState("");
    const [services, SetServices] = useState("")


    async function HandleSubmit(e: React.FormEvent){
        e.preventDefault();
        
        try{
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password, email, role, phone, services})
            })

            const data = await res.json()
            console.log("resposta da API:", data)

            if(!res.ok){
                alert(`Erro de conexão com o servidor: ${data.message || "Erro"}`)
                return
            }
        } catch(err){
            console.error(err)
            alert('erro de conexão com o servidor')

        }
    }


    return(
        <main className="flex items-center justify-center h-screen w-screen">
            <form onSubmit={HandleSubmit} className="w-[500] h-[700px] bg-white rounded-[10px] py-[10px] px-[10px] flex flex-col  gap-1.5 items-center">

            <input 
                type="text" 
                placeholder="seu nome" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>

            <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>
            <input 
                type="password" 
                placeholder="Digite sua senha"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>
            
            <input 
                type="password" 
                placeholder="Confirme sua Senha"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>
            
            <input 
                type="tel" 
                placeholder="(xx) x xxxx-xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>

            <input 
                type="text" 
                placeholder="se cadastrar como cliente ou prestador de serviços"
                value={role}
                required
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>

            <input 
                type="text" 
                placeholder="quais serviços você oferece"
                value={services}
                onChange={(e) => SetServices(e.target.value)}
                className="w-full h-[40px] p-4 bg-gray-300 rounded-[5px] text-black"/>

          

                
            <button type="submit" className="h-8  w-[100px] border-2 rounded-[5px] text-black cursor-pointer">Entrar</button>
            </form>
        </main>
    )
}


export default Register;





