'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 23, value: 2 },
  { day: 25, value: 4 },
  { day: 27, value: 3 },
  { day: 30, value: 6 },
  { day: 35, value: 5 },
  { day: 40, value: 7 },
  { day: 45, value: 6 },
  { day: 55, value: 8 },
  { day: 61, value: 7 },
]

export function MonthlyBookingsChart() {
  return (
    <Card className="w-full max-w-x flex flex-col justify-between pb-1">
      <CardHeader className="pb-2">
        <CardTitle>Agendamentos do mês</CardTitle>
        <div className="text-3xl font-bold">93%</div>
        <p className="text-sm text-muted-foreground">meta mensal</p>
      </CardHeader>
      <CardContent className="h-44 ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{ r: 6, fill: '#ef4444', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
