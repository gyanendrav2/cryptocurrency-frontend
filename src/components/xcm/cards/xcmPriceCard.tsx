import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import PriceStatisticsChart from "../../charts/priceStatisticsChart"
import CoinmetroLogo from "../../icons/coinmetroLogo"

export default function XcmPriceCard() {
  return (
    <Box>
      <Box cssx={{ borderRadius: 8, px: 32, py: 18, bg: "white", height: "fit-content", mb: 16 }}>
        <Flex align="center" wrap="nowrap">
          <CoinmetroLogo />
          <Box cssx={{ marginLeft: 32 }}>
            <Element as="P" cssx={{ color: "teal.dark", fontSize: 12, lineHeight: "20px" }}>
              XCM price
            </Element>
            <Element
              as="h1"
              cssx={{ color: "purple.default", fontSize: 30, lineHeight: "40px", fontWeight: 800 }}
            >
              $0.2136
            </Element>
          </Box>
        </Flex>
      </Box>
      <Box cssx={{ borderRadius: 8, px: 13, pr: 0, py: 18, bg: "white", mb: "1rem" }}>
        <PriceStatisticsChart />
      </Box>
    </Box>
  )
}
