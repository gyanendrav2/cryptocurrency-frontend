import { Element, Flex } from "@react-cssx/core"
import React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 0.42,
    pv: 0.44,
    amt: 0.46,
  },
  {
    name: "Page C",
    uv: 0.32,
    pv: 0.34,
    amt: 0.36,
  },
  {
    name: "Page D",
    uv: 0.22,
    pv: 0.24,
    amt: 0.36,
  },
  {
    name: "Page E",
    uv: 0.12,
    pv: 0.24,
    amt: 0.16,
  },
  {
    name: "Page F",
    uv: 0.22,
    pv: 0.24,
    amt: 0.16,
  },
  {
    name: "Page G",
    uv: 0.32,
    pv: 0.34,
    amt: 0.36,
  },
]

const filterRange = [
  { time: "1 day" },
  { time: "1 week" },
  { time: "3 months" },
  { time: "1 years" },
  { time: "max" },
]

export default function PriceStatisticsChart() {
  const demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw"

  return (
    <div className="price__chart">
      <Flex align="center" justify="flex-end" cssx={{ pr: "2rem", mb: "2rem" }}>
        {filterRange.map((item: { time: string }, i: number) => (
          <Element
            key={i}
            as="p"
            cssx={{
              minWidth: "5rem",
              textAlign: "center",
              color: "grey.dark",
              opacity: 0.4,
              borderBottom: "1px solid",
              borderColor: "indigo.dark",
            }}
          >
            {item.time}
          </Element>
        ))}
      </Flex>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#69D5DD" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#C7EFEE" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
