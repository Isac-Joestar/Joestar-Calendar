import { AiFillInstagram } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link'
import CardStore from "./_components/cards";


export default function StorePage() {
    return (
      <div className="h-auto w-full p-5 bg-gray-100">
        <div className="">
          <div className="">
              <div className="w-full h-96 flex items-center justify-center overflow-hidden rounded-[3px] border border-black">
                <img className="w-full" src="https://images.unsplash.com/photo-1743656641268-d6c0e66e9cb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>

              <div className="flex flex-row items-start justify-between gap-5 px-7">
                <div>
                  <div className="flex flex-row items-start gap-5 relative">
                    <div className="w-36 h-36 rounded-full  ">
                      <img className="absolute w-36 h-36 rounded-full -top-18 border-white border-2" src="https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold leading-6 mt-1">Barbearia novo Estilo</h1>
                      <p className="leading-4 mt-0.5">Barbearia</p>
                      <ul className="flex flex-row items-center gap-3 mt-2">
                        <li className="text-[25px] cursor-pointer"><AiFillInstagram /></li>
                        <li className="text-[25px] cursor-pointer"><AiFillInstagram /></li>
                        <li className="text-[25px] cursor-pointer"><AiFillInstagram /></li>
                        <li className="text-[25px] cursor-pointer"><AiFillInstagram /></li>
                        <li className="text-[25px] cursor-pointer"><AiFillInstagram /></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex fler-row items center gap-2">
                      <div className="w-20 h-7 flex items-center justify-center gap-2 bg-white rounded-[10px] border">
                        <GrGroup />
                        <p>1K</p>
                      </div>
                      <div  className="w-20 h-7 flex items-center justify-center gap-2 bg-white rounded-[10px] border">
                        <IoIosStar className="text-yellow-300 "/>
                        <p>4.8</p>
                      </div>
                    </div>

                    <p className="w-[600px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non luctus orci. Proin luctus eros nec neque elementum, vel sagittis lectus egestas.Corte dégradé simples Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>

                <div className="mt-2 w-[500px] bg-white border p-3 flex items-center justify-center rounded-[4px]">
                  <ul className="w-full flex flex-col itemns-start gap-2">
                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Domingo:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-red-600'>
                        </div>
                        <p>Fechado</p>
                      </div>
                      <div className="w-1/4">
                        <p></p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Segunda:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 18:00</p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Terça:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 18:00</p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Quarta:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 18:00</p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Quinta:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 18:00</p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Sexta:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 18:00</p>
                      </div>
                    </li>

                    <li className="w-full flex flex-row items-center justify-between">
                      <div className="w-1/3">
                        <p>Sábado:</p>
                      </div>
                      <div className="w-1/3 flex flex-row gap-2 items-center">
                        <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        <p>Aberto</p>
                      </div>
                      <div className="w-1/4 ">
                        <p>08:00 as 14:00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>

          <div className="px-7 mt-7">
            
            <Link href="" className="flex flex-row items-center gap-2 cursor-pointer text-blue-600 mb-1">
              <div>
                <IoLocationSharp className=""/>
              </div>
              <p className="underline leading-5 underline-offset-2 font-semibold text-[16px]">Ver localização</p>
            </Link>
 
            <p className="text-gray-700 font-semibold text-[16px]">Brasília, Distrito Federal, Brasil ° <span className="text-blue-600 cursor-pointer">informações de contato</span></p>
          </div>
        </div>

        <div className="px-7 mt-10">
          <h2 className="text-[22px] font-semibold leading-6">Agende nossos serviços</h2>
          <div className="w-full h-auto mt-5 flex flex-row flex-wrap justify-around gap-y-5">
            <CardStore/>
            <CardStore/>
            <CardStore/>
            <CardStore/>
            <CardStore/>

            <CardStore/>
            <CardStore/>
            <CardStore/>
            <CardStore/>
            <CardStore/>
          </div>
        </div>
      </div>
    );
  }
  