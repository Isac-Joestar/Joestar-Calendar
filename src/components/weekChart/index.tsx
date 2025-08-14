'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList } from 'recharts'

const rawData = [
  { name: 'Dom', value: 13, max: 10 },
  { name: 'Seg', value: 7, max: 10 },
  { name: 'Ter', value: 5, max: 10 },
  { name: 'Qua', value: 0, max: 10 },
  { name: 'Qui', value: 3, max: 10 },
  { name: 'Sex', value: 10, max: 10 },
  { name: 'Sab', value: 17, max: 10 },
]

const chartData = rawData.map((item) => ({
  ...item,
  displayValue: Math.min(item.value, 10),
}))

export function WeekChart() {
  return (
    <Card className="w-full  pb-0  pt-4 max-w-2xl flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Semana</CardTitle>
      </CardHeader>
      <CardContent className="h-40 flex items-end">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={40} barGap={-40}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />

            <Bar dataKey="max" fill="#bfdbfe" radius={[8, 8, 8, 8]}>
              <LabelList
                dataKey="value"
                position="top"
                fill="#000"
                fontSize={12}
              />
            </Bar>

            <Bar dataKey="displayValue" fill="#3b82f6" radius={[8, 8, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
