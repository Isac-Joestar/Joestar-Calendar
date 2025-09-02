import Link from "next/link"

function Header(){
    return(
        <header className='w-full h-20 flex flex-row items-center justify-between px-5 border-b-2'>
            <div className="cursor-pointer">
                <Link href="/">
                    <p>
                        <span className='text-[22px] font-semibold text-blue-600'>Joestar</span> Calendar
                    </p>
                </Link>
            </div>

            <nav>
            <ul className='flex flex-row items-center gap-4'>
                <Link href="">
                    <li className="cursor-pointer">Recursos</li>
                </Link>
                <Link href="">
                    <li className="cursor-pointer">Clientes</li>
                </Link>
                <Link href="">
                    <li className="cursor-pointer">Reservas</li>
                </Link>
                <Link href="">
                    <li className="cursor-pointer">Planos</li>
                </Link>
            </ul>
            </nav>

            <div className="flex flex-row items-center gap-4">
                <Link href="/login">
                    <button className="cursor-pointer">Entrar</button>
                </Link>
                <Link href="/register">
                    <button className="cursor-pointer w-36 bg-blue-600 text-white h-10 rounded-[10px]">Solicitar demo</button>
                </Link>
            </div>
        </header>
    )
}

export default Header