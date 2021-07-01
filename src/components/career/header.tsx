import React from "react"
import { Box, Element } from "@react-cssx/core"
import { headerStyle } from "./cssxStyle/header"

function CareerHeader() {
  return (
    <>
      <Box
        cssx={{
          h: "5.5rem",
          "@mq": {
            tablet: {
              h: "6.5rem",
            },
          },
        }}
      />
      <Box cssx={headerStyle.headerWrapper}>
        <img src="/career/headerCurve.svg" style={headerStyle.image as any} alt="top curve" />
        <Element as="h1" cssx={headerStyle.heading}>
          Work at CoinMetro
        </Element>
      </Box>
    </>
  )
}

export default CareerHeader
