export default function Home() {
  return (
    <main className="w-full h-screen">
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
    </main>
  )
}
