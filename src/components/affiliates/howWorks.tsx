import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { HowWorksStyle } from "./cssxStyle/howWorkStyle"

export default function HowWorks() {
  const classes = HowWorksStyle
  return (
    <Container>
      <Grid columns={{ _: 1, desktop: 2 }} columnGap={2}>
        <Box>
          <Element as="h1" cssx={classes.h1}>
            How it works
          </Element>
          <Element as="p" cssx={classes.p}>
            Earn crypto every time you refer a trader. A one off bonus for first time signups +
            uncapped commissions as long as they keep trading.
          </Element>
          <Element as="img" src="affiliates/laptopMobView.png" cssx={classes.mobImg} alt="bg" />
          <Element as="img" src="affiliates/laptopTabView.png" cssx={classes.TabImg} alt="bg" />
          <Element as="img" src="affiliates/laptop.png" cssx={classes.img} alt="bg" />
        </Box>
      </Grid>
    </Container>
  )
}
