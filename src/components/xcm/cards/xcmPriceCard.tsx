import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import CoinmetroLogo from "../../icons/coinmetroLogo"

export default function XcmPriceCard() {
  return (
    <Box cssx={{ borderRadius: 8, px: 32, py: 18, bg: "white", height: "fit-content" }}>
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
  )
}
