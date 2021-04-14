import React, { ReactElement, useEffect, useState } from "react"
import {
  AreaChart, Area, ResponsiveContainer, YAxis,
} from "recharts"
import axios from "axios"
import { cryptoColorMap } from "../lib/colorMap"
import { useInterval } from "../lib/useInterval"

// export const aspectRatio = 1

export interface IRechartProps {
  pair: string
}

export function Rechart({ pair }: IRechartProps): ReactElement {
  if (! pair) {
    return null
  }
  const [data, setData] = useState()
  const color = cryptoColorMap.find((item) => item.symbol === pair.slice(0, - 3))?.color || "#000000"

  const gradientId = `gradient-${pair}`

  const updateData = () => {
    axios.get(`https://api.coinmetro.com/exchange/candles/${pair}/14400000/${Date.now() - 604800000}`)
      .then((res) => setData(res.data.candleHistory))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    updateData()
  }, [])

  useInterval(() => {
    updateData()
  }, 14400000)

  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.2} />
            <stop offset="95%" stopColor={color} stopOpacity={0.0} />
          </linearGradient>
        </defs>

        <YAxis domain={["auto", "auto"]} hide />

        <Area type="monotone" dataKey="c" stroke={color} fill={`url(#${gradientId})`} />
      </AreaChart>
    </ResponsiveContainer>
  )
}
