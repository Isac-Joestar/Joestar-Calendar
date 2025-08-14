'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'

export type Appointment = {
  name: string
  email: string
  time: string
  service: string
  price: string
  status: 'Agendado' | 'Completo' | 'Cancelado'
}

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'E-mail',
  },
  {
    accessorKey: 'time',
    header: 'Horário',
    cell: ({ row }) => (
      <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
        {row.getValue('time')}
      </span>
    ),
  },
  {
    accessorKey: 'service',
    header: 'Serviço',
  },
  {
    accessorKey: 'price',
    header: 'Valor',
    cell: ({ row }) => (
      <span className="text-green-600 font-semibold">
        {row.getValue('price')}
      </span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Estado',
    cell: ({ row }) => {
      const status = row.getValue('status') as Appointment['status']
      const colors = {
        Agendado: 'bg-blue-100 text-blue-700',
        Completo: 'bg-green-100 text-green-700',
        Cancelado: 'bg-red-100 text-red-700',
      }
      return <Badge className={colors[status]}>{status}</Badge>
    },
  },
]
