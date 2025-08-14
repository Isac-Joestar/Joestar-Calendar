'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import Rows from './rows'

export function DataTable() {
  const [filter, setFilter] = useState('')

  return (
    <div className="w-full bg-white px-5 h-full border rounded-2xl">
      <div className="flex items-center justify-between py-4">
        <p className="font-medium">Próximos agendamentos</p>
        <Input
          placeholder="Pesquisar cliente"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="w-full">
        <ul className="w-full h-9 grid grid-cols-6 bg-gray-100 px-4 rounded-[12px] mb-5 border">
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">Nome</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">E-mail</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">Horário</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">Serviço</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">Valor</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <p className="leading-3">Estado</p>
            <img src="./icons/arrows.svg" alt="" className="h-3" />
          </li>
        </ul>

        <div className="flex flex-col gap-1">
          <Rows
            firstname="Isac"
            lastname="Joestar"
            email="example@gmail.com"
            date="13:30"
            service="corte degradê simples"
            price="30"
            status="Agendado"
          />
        </div>
      </div>
    </div>
  )
}
