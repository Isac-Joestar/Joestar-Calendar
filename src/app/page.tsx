// npm install --save-dev typescript @types/react @types/react-dom
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-start justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Link href="/login" className="">
        <button className="cursor-pointer border-1 py-[4px] px-[10px]  rounded-[4px] ">
            Faça login
        </button>
      </Link>
      <Link href="/register" className="">
        <button className="cursor-pointer border-1 py-[4px] px-[10px] rounded-[4px] ">
            Cadastre-se
        </button>
      </Link>
    </div>
  );
}
