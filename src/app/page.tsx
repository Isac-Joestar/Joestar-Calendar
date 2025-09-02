import Header from "../components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full h-screen flex flex-row items-center justify-between px-5">
        <div>
          <div>

          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-[60px] leading-16 font-semibold">
              Pense, Agende e gerencie <br/>
              <span className="text-blue-600"> tudo em um só lugar</span>
            </h1>
            <p className="text-center mt-2 text-[19px]">Organize horários, acompanhe clientes e receba reservas facilmente.</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Link href="/services">
              <button className="cursor-pointer bg-white text-black h-10 rounded-[10px] px-6 border text-[18px] font-semibold">Pesquisar Serviços</button>
            </Link>
            <Link href="/register">
              <button className="cursor-pointer bg-blue-600 text-white h-10 rounded-[10px] px-6 text-[18px] font-semibold">Criar conta</button>
            </Link>
            
          </div>
        </div>
        
        <div>
          
        </div>
      </main>
    </>
  )
}
