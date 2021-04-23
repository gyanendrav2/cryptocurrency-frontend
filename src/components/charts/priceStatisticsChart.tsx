import { Element, Flex } from "@react-cssx/core"
import axios from "axios"
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

const filterRange = [
  { time: "1 day", active: true, shortTime: "1D" },
  { time: "1 week", active: false, shortTime: "1W" },
  { time: "3 months", active: false, shortTime: "1M" },
  { time: "1 years", active: false, shortTime: "1Y" },
  { time: "max", active: false, shortTime: "MAX" },
]

export default function PriceStatisticsChart(props) {
  const data = [
    { price: 0.41141751220214 },
    { price: 0.21141751220214 },
    { price: 0.31141751220214 },
    { price: 0.21141751220214 },
    { price: 0.51141751220214 },
    { price: 0.61141751220214 },
  ]

  console.log("props", props)
  const [filterOptions, setFilterOptions] = useState(filterRange)
  const [graphData, setGraphData] = useState([])
  const [activeTime, setActiveTime] = useState("1D")

  const handlePriceAPI = async (timePeriod) => {
    const result = await priceChartAPI(timePeriod)
    if (result.status === 200) {
      const priceData = result.data.prices.map((item: string) => ({ price: item }))
      setGraphData(priceData)
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
      <Flex align="center" justify="flex-end" cssx={{ pr: "2rem", mb: "2rem" }}>
        {filterOptions.map((item: { time: string; active: boolean }, i: number) => (
          <Element
            key={i}
            as="p"
            onClick={() => handleAcitve(i)}
            cssx={{
              minWidth: "5rem",
              cursor: "pointer",
              textAlign: "center",
              color: "#a4a6b3",
              borderBottom: "1px solid",
              borderColor: item.active ? "#69D5DD" : "#a4a6b3",
              "@mq": {
                xsm: {
                  fontSize: 10,
                  lineHeight: "24px",
                  width: "20%",
                  minWidth: "unset",
                },
                tablet: {
                  minWidth: "5rem",
                  width: "unset",
                },
              },
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

// PriceStatisticsChart.getInitialProps = async () => {
//   const result = await axios.get("https://api.coinmetro.com/exchange/price-series/XCMEUR/1M")
//   const data = await result.data
//   return data
// }

PriceStatisticsChart.getInitialProps = async () => {
  const result = await axios.get("https://api.mocki.io/v1/58fdd8b2")
  const data = await result.data
  // const result = await API.get(endpoints.discover)
  // const data = await result.data
  return { homeData: { data } }
}
