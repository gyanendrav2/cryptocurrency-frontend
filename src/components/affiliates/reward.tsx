import { Box, Element, Flex, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { rewardStyle } from "./cssxStyle/rewardStyle"

export default function Reward() {
  const classes = rewardStyle
  return (
    <Box>
      <Element
        as="img"
        src="affiliates/rewardCurveTop.svg"
        cssx={{ w: "100%", mb: "-2px" }}
        alt=""
      />
      <Box cssx={classes.wrapper}>
        <Container>
          <Element as="p" cssx={classes.heading}>
            Our rewards
          </Element>
          <Grid columns={{ _: 1, tablet: 2, desktop: 3 }} columnGap={20}>
            <Box>
              <Element as="img" src="affiliates/40percent.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                Earn 40% net fees for life
              </Element>
            </Box>
            <Box>
              <Element as="img" src="affiliates/5euro.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                Get €5 when your ref signs up and makes a deposit
              </Element>
            </Box>
            <Box>
              <Element as="img" src="affiliates/10percent.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                Earn 10% of your referrals referrals net fees
              </Element>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box cssx={{ mt: "-2px", bg: "grey.bg" }}>
        <Element as="img" src="affiliates/rewardCurveBottom.svg" cssx={{ ml: "auto" }} alt="" />
      </Box>
    </Box>
  )
}
