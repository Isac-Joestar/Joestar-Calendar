"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import {  
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption, } from '@headlessui/react'

const services = [
    'Developer',
    'Barber',
    'Hairdresser',
    'Nail Technician',
    'Massage Therapist',
    'Personal Trainer',
    'Psychologist',
    'Esthetician',
    'Photographer',
    'Consultant',
    'Private Tutor',
  ]
const roles = [
    'Client',
    'Provider'
]
function Register(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole ] = useState(roles[0]);
    const [service, setService] = useState("")


    async function HandleSubmit(e: React.FormEvent){
        e.preventDefault();
        
        try{
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({firstname, lastname, email, phone, password, role, service})
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
        <main className="flex items-center justify-center h-screen w-screen bg-white">
            <form onSubmit={HandleSubmit} className="w-[600px] h-[710px] bg-white rounded-[10px] py-[10px] px-[10px] flex flex-col  gap-3 items-center justify-between shadow-2xl">
            <div className="flex flex-col gap-10 w-full">
                <h1 className="text-2xl font-bold text-center text-black">Create your account</h1>
                <div className="w-full  flex flex-col  gap-4 items-center">
                    <div className="w-full flex flex-row items-center justify-between gap-5">
                        <div className="flex flex-col w-full"> 
                            <label 
                                htmlFor="firstname" 
                                className="text-black"
                                >First Name</label>
                            <input 
                                type="text" 
                                id="firstname"

                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                                className="input-default"
                                />
                        </div>
                        <div className="flex flex-col w-full"> 
                            <label 
                                htmlFor="lastname" 
                                className="text-black"
                                >Last Name</label>
                            <input 
                                type="text" 
                                id="lastname"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                                className="input-default"
                                />
                        </div>
                        
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="text-black">
                            E-mail
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="example@gmail.com" 
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-default"
                            />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="text-black">
                            Phone number
                        </label>
                        <input 
                            type="tel" 
                            id="phone"
                            placeholder="(xx) x xxxx-xxxx" 
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-default"
                            />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-black">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="enter your password" 
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-default"
                            />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmPassword" className="text-black">
                            Confirm your password
                        </label>
                        <input 
                            type="password" 
                            id="confirmPassword"
                            placeholder="enter your password" 
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input-default"
                            />
                    </div>

                    <div className="w-full flex flex-row items-center justify-between gap-5">
                        <div className="flex flex-col w-full relative">
                            <label htmlFor="service" className="text-black mb-1">
                                Account type
                            </label>
                            <Listbox value={role} onChange={setRole}>
                                <div className="relative">
                                <ListboxButton className="w-full h-9 bg-gray-200 rounded-[7px] text-black px-4 pr-10 text-left cursor-pointer">
                                    {role}
                                    <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                                </ListboxButton>

                                <ListboxOptions className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-md max-h-28 overflow-y-auto">
                                    
                                    {roles.map((role, idx) => (
                                        <ListboxOption
                                            key={idx}
                                            value={role}
                                            className={({ active }) =>
                                            `cursor-pointer px-4 py-2 ${
                                                active ? 'bg-blue-100 text-blue-700' : 'text-gray-800'
                                            }`
                                            }
                                        >
                                            {role}
                                        </ListboxOption>
                                    ))}
                                   
                                </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="service" className="text-black mb-1">
                                Service
                            </label>
                            <Listbox value={service} onChange={setService}>
                                <div className="relative">
                                <ListboxButton className={`w-full h-9 bg-gray-200 rounded-[7px] text-black px-4 pr-10 text-left ${
                                    role === 'Provider' ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                    {role === 'Provider' ? service : 'for providers only'}
                                    <IoIosArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                                </ListboxButton>
                                    { role === 'Provider' && (                
                                        <ListboxOptions className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-md max-h-28 overflow-y-auto">
                                            {services.map((service, idx) => (
                                            <ListboxOption
                                                key={idx}
                                                value={service}
                                                className={({ active }) =>
                                                `cursor-pointer px-4 py-2 ${
                                                    active ? 'bg-blue-100 text-blue-700' : 'text-gray-800'
                                                }`
                                                }
                                            >
                                                {service}
                                            </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    )}            
                                </div>
                            </Listbox>
                        </div>
                        
                    </div>
                    
                </div>
            </div>    

            <button 
                type="submit" 
                className="h-11  w-full border-2 rounded-[10px] text-white cursor-pointer bg-blue-600">
                Send
            </button>
            </form>
        </main>
    )
}


export default Register;





