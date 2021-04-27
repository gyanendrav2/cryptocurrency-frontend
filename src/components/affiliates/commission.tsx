import { Box, Element } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import CryptoTable from "./cryptoTable"
import { CommissionStyle } from "./cssxStyle/commissionStyle"

export default function Commission() {
  const classes = CommissionStyle
  return (
    <Box cssx={classes.wrapper}>
      <Container>
        <Element as="h1" cssx={classes.heading}>
          We have the highest commission in the industry
        </Element>
        <Element as="p" cssx={classes.p}>
          How does CoinMetro compare to others?
        </Element>
        <CryptoTable />
      </Container>
    </Box>
  )
}
