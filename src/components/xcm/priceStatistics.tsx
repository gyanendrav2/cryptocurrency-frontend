import { Box, Element, Flex, Grid } from "@react-cssx/core"
import React from "react"
import { Button } from "../../ui/Button"
import { Container } from "../../ui/Container"
import SupplyCard from "./cards/supplyCard"
import XcmPriceCard from "./cards/xcmPriceCard"
import { priceStatisticsStyle } from "./cssxStyle/priceStatistics"

export function PriceStatistics() {
  const classes = priceStatisticsStyle
  return (
    <Box cssx={{ bg: "grey.bg", pt: 135, zIndex: "-2" }}>
      <Element as="h2" cssx={classes.heading}>
        XCM price statistics
      </Element>
      <Element as="h2" cssx={classes.title}>
        Real time XCM data
      </Element>
      <Container
        cssx={{
          // mx: 164,
          "@mq": {
            xsm: {
              mx: "unset",
            },
            tablet: {
              marginLeft: "auto!important",
              marginRight: "auto!important",
            },
            desktop: {
              marginLeft: "auto!important",
              marginRight: "auto!important",
            },
          },
        }}
      >
        <Grid columns={{ _: 1, desktop: 2 }} columnGap={24}>
          <XcmPriceCard />
          <SupplyCard />
        </Grid>
      </Container>
      <Flex align="center" justify="center">
        <Button variant="purple" cssx={{ mt: 40, mb: 190 }}>
          View all statistics
        </Button>
      </Flex>
    </Box>
  )
}
