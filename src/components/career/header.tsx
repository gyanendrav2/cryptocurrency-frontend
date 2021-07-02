import React from "react"
import { Box, Element } from "@react-cssx/core"
import { headerStyle } from "./cssxStyle/header"

export interface CareerHeaderprops {}

function CareerHeader() {
  return (
    <Box>
      <Box cssx={headerStyle.headerWrapper}>
        <img src="/career/headerCurve.svg" style={headerStyle.image as any} alt="top curve" />
        <Element as="h1" cssx={headerStyle.heading}>
          Work at CoinMetro
        </Element>
      </Box>
    </Box>
  )
}

export default CareerHeader
