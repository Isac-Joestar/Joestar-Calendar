import { MonthlyBookingsChart } from '@/src/components/monthlyBookingsChart'
import Menu from '../../components/menu/index'
import React from 'react'
import { WeekChart } from '@/src/components/weekChart'
import { DataTable } from '@/src/components/table'
import { columns } from '@/src/components/table/columns'
import { appointments } from '@/src/lib/table'

import { BsThreeDots } from 'react-icons/bs'

function Dashboard() {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <Menu />
      <div className="h-screen w-full pl-7 pr-7 pt-5 bg-gray-100">
        <div className="flex flex-row justify-between w-full mb-3 gap-4 h-[38vh]">
          <div className="w-[70%] flex flex-col gap-3">
            <div className="w-full h-full bg-white rounded-2xl flex flex-row items-center justify-between  p-3 border">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>Registros de 1 ago a 11 ago</p>
              </div>

              <div className="w-44 py-2 px-4 rounded-[10px] flex flex-col gap-3 items-start bg-green-200">
                <div className="w-full flex flex-row items-center justify-between">
                  <p>ganho total</p>
                  <button className="h-2 flex items-center justify-center cursor-pointer">
                    <BsThreeDots />
                  </button>
                </div>
                <p className="text-3xl font-bold">3.423,00</p>
              </div>
            </div>
            <WeekChart />
          </div>
          <MonthlyBookingsChart />
        </div>

        <div className="w-full h-[57vh]">
          <DataTable columns={columns} data={appointments} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
