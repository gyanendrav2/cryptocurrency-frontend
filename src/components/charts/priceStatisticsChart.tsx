import { Box, Element, Flex } from "@react-cssx/core"
import React, { useEffect, useState } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { priceChartAPI } from "../../API/xcmAPI"
import { roundUpNumber } from "../../helper/roundUpNumber"

const filterRange = [
  { time: "1 day", active: true, shortTime: "1D" },
  { time: "1 week", active: false, shortTime: "1W" },
  { time: "1 month", active: false, shortTime: "1M" },
  { time: "3 months", active: false, shortTime: "3M" },
  { time: "1 year", active: false, shortTime: "1Y" },
  { time: "3 years", active: false, shortTime: "3Y" },
  { time: "max", active: false, shortTime: "MAX" },
]

export default function PriceStatisticsChart() {
  const [filterOptions, setFilterOptions] = useState(filterRange)
  const [graphData, setGraphData] = useState([])
  const [activeTime, setActiveTime] = useState("1D")
  const [minMaxValues, setMinMaxValues] = useState({ max: "", vol: "" })

  const handlePriceAPI = async (timePeriod) => {
    const result = await priceChartAPI(timePeriod)
    console.log(result)
    if (result.status === 200) {
      const priceData = result.data.prices.map((item: string) => ({ price: item }))
      setGraphData(priceData)
      setMinMaxValues({ max: result.data.max, vol: result.data.vol })
    }
  }
  useEffect(() => {
    handlePriceAPI(activeTime)
  }, [])

  const handleAcitve = (i) => {
    const tempData: any = [...filterOptions]
    const result = tempData.map((item) => ({ ...item, active: false }))
    result[i].active = true
    setActiveTime(result[i].shortTime)
    setFilterOptions(result)
    handlePriceAPI(result[i].shortTime)
  }
  return (
    <div className="price__chart">
      <Flex align="center" justify="flex-end" wrap="wrap" cssx={{ pr: "2rem", mb: "2rem" }}>
        {filterOptions.map((item: { time: string; active: boolean }, i: number) => (
          <Element
            key={i}
            as="p"
            onClick={() => handleAcitve(i)}
            cssx={{
              p: "0 1rem",
              cursor: "pointer",
              textAlign: "center",
              color: "#a4a6b3",
              borderBottom: "1px solid",
              borderColor: item.active ? "#69D5DD" : "#a4a6b3",

              "@mq": {
                xsm: {
                  fontSize: 12,
                  lineHeight: "1.5rem",
                  minWidth: "unset",
                },
              },
            }}
          >
            {item.time}
          </Element>
        ))}
      </Flex>
      <Box cssx={{ pr: "2rem" }}>
        <Flex
          align="center"
          justify="space-between"
          wrap="nowrap"
          cssx={{ maxWidth: "12.25rem", ml: "auto" }}
        >
          <Element as="p">€{roundUpNumber(+minMaxValues.vol)}</Element>
          <Element as="p">€{roundUpNumber(+minMaxValues.max)}</Element>
        </Flex>
      </Box>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={graphData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#69D5DD" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#C7EFEE" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <YAxis />
          <XAxis hide />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
