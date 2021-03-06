import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import { roundUpNumber } from "../../../helper/roundUpNumber"
import PriceStatisticsChart from "../../charts/priceStatisticsChart"
import CoinmetroLogo from "../../icons/coinmetroLogo"

export default function XcmPriceCard() {
  const getXcmValue = () => {
    try {
      const data = JSON.parse(localStorage.getItem("xcmValue"))
      const value = roundUpNumber(data.value)
      return data.symbol + value
    } catch (e) {
      return ""
    }
  }
  return (
    <Box>
      <Box cssx={{ borderRadius: 8, px: 32, py: 18, bg: "white", height: "fit-content", mb: 16 }}>
        <Flex align="center" wrap="nowrap">
          <CoinmetroLogo />
          <Box cssx={{ marginLeft: 32 }}>
            <Element as="P" cssx={{ color: "teal.dark", fontSize: 12, lineHeight: "1.25rem" }}>
              XCM price
            </Element>
            <Element
              as="h1"
              cssx={{
                color: "purple.default",
                fontSize: 30,
                lineHeight: "2.5rem",
                fontWeight: 800,
              }}
            >
              {getXcmValue()}
            </Element>
          </Box>
        </Flex>
      </Box>
      <Box cssx={{ borderRadius: 8, px: 13, pr: 0, pt: 18, pb: 80, bg: "white", mb: "1rem" }}>
        <PriceStatisticsChart />
      </Box>
    </Box>
  )
}
