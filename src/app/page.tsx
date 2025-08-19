export default function Home() {
  return (
    <>
      <header className='w-full h-20 flex flex-row items-center justify-between px-5 border-b-2'>
        <div className="cursor-pointer">
          <p>
            <span className='text-[22px] font-semibold text-blue-600'>Joestar</span> Calendar
          </p>
        </div>

        <nav>
          <ul className='flex flex-row items-center gap-4'>
            <li className="cursor-pointer">Recursos</li>
            <li className="cursor-pointer">Clientes</li>
            <li className="cursor-pointer">Reservas</li>
            <li className="cursor-pointer">Planos</li>
          </ul>
        </nav>

        <div className="flex flex-row items-center gap-4">
          <button className="cursor-pointer">Entrar</button>
          <button className="cursor-pointer w-36 bg-blue-600 text-white h-10 rounded-[10px]">Solicitar demo</button>
        </div>
      </header>
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
            <button className="cursor-pointer bg-white text-black h-10 rounded-[10px] px-6 border text-[18px] font-semibold">Pesquisar Serviços</button>
            <button className="cursor-pointer bg-blue-600 text-white h-10 rounded-[10px] px-6 text-[18px] font-semibold">Criar conta</button>
          </div>
        </div>
        
        <div>

        </div>
      </main>
    </>
  )
}
