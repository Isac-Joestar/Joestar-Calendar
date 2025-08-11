import React from 'react'
import { IoHome } from 'react-icons/io5'
import { MdNotificationsActive } from 'react-icons/md'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GrAnalytics } from 'react-icons/gr'
import { GrGroup } from 'react-icons/gr'

function Menu() {
  return (
    <div className="w-72 h-screen bg-white rounded-tr-[25px] rounded-br-[25px] pl-3 pr-3 pt-5 flex items-start flex-col text-black">
      <div className="flex flex-row items-center justify-between cursor-pointer w-full bottom-1px border-b-2 pb-3 border-gray-500">
        <div className=" flex row gap-3 items-center ">
          <div className=" w-[45px] h-[45px] rounded-[12px] overflow-hidden border-2 p-0.5 ">
            <img
              className="rounded-[9px]"
              src="https://i.pinimg.com/1200x/d7/e5/8b/d7e58bd3d42f2d01a88855bafe3236d1.jpg"
              alt=""
            />
          </div>

          <div>
            <p className="font-bold text-sm">Isac Joestar</p>
            <p className="text-xs">Desenvolvedor Full Stack</p>
          </div>
        </div>

        <div className="mr-1">
          <img src="./icons/arrows.svg" alt="" />
        </div>
      </div>

      <div className="flex w-full h-full flex-col justify-between pt-8 pb-8">
        <div className="flex w-full flex-col gap-6">
          <div className="w-full">
            <p className="mb-2 ml-[15px] text-[12px]">Main Menu</p>
            <nav className="w-full flex flex-col gap-[5px]">
              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <div className="text-purple-500 text-[20px] flex items-center">
                    <IoHome />
                  </div>
                  <p className="leading-[1] font-bold">Dashboard</p>
                </div>
              </div>

              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                  <div className="text-black text-[20px] flex items-center">
                    <IoHome />
                  </div>
                  <p className="leading-[1] font-bold">página</p>
                </div>
              </div>

              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                  <div className="text-black text-[20px] flex items-center">
                    <MdNotificationsActive />
                  </div>
                  <p className="leading-[1] font-bold">Notificações</p>
                </div>
              </div>

              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                  <div className="text-black text-[20px] flex items-center">
                    <FaMoneyBillTrendUp />
                  </div>
                  <p className="leading-[1] font-bold">Ganhos</p>
                </div>
              </div>
            </nav>
          </div>

          <div className="w-full">
            <p className="mb-2 ml-[15px] text-[12px]">Registros</p>
            <nav className="w-full flex flex-col gap-[5px]">
              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                  <div className="text-black text-[20px] flex items-center">
                    <MdNotificationsActive />
                  </div>
                  <p className="leading-[1] font-bold">Análises</p>
                </div>
              </div>

              <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
                <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

                <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                  <div className="text-black text-[20px] flex items-center">
                    <FaMoneyBillTrendUp />
                  </div>
                  <p className="leading-[1] font-bold">Clientes</p>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="w-full">
          <nav className="w-full flex flex-col gap-[5px]">
            <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
              <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

              <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                <div className="text-black text-[20px] flex items-center">
                  <GrAnalytics />
                </div>
                <p className="leading-[1] font-bold">Análises</p>
              </div>
            </div>

            <div className="h-[35px] w-full rounded-[7px] flex flex-row items-center cursor-pointer">
              <div className="hidden w-1 h-[25px] mr-3 bg-purple-500 rounded-[10px]"></div>

              <div className="ml-[15px] flex items-center gap-[10px] rounded-[7px] h-full w-full justify-start pl-2 pr-2 bg-white ">
                <div className="text-black text-[20px] flex items-center">
                  <GrGroup />
                </div>
                <p className="leading-[1] font-bold">Clientes</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menu
