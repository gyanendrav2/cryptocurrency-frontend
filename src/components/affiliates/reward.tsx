import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { rewardStyle } from "./cssxStyle/rewardStyle"

export default function Reward() {
  const classes = rewardStyle
  return (
    <Box cssx={{ mt: "-4rem" }}>
      <Element
        as="img"
        src="affiliates/rewardCurveTop.svg"
        cssx={{ w: "100%", mb: "-2px" }}
        alt="reward-top-curve"
      />
      <Box cssx={classes.wrapper}>
        <Container>
          <Element as="p" cssx={classes.heading}>
            Our rewards
          </Element>
          <Grid columns={{ _: 1, tablet: 2, desktop: 3 }} columnGap={20}>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/40percent.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                Earn 40% net fees for life
              </Element>
            </Box>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/infintiy.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                There is no cap to your earnings, earn for life.
              </Element>
            </Box>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/10percent.png" cssx={classes.img} alt="" />
              <Element as="p" cssx={classes.p}>
                Earn 10% of your referrals referrals net fees
              </Element>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box cssx={{ transform: "translateY(2px)", bg: "grey.bg" }}>
        <Element
          as="img"
          src="affiliates/rewardCurveBottom.svg"
          cssx={{ ml: "auto", transform: "translateY(-3px)" }}
          alt=""
        />
      </Box>
    </Box>
  )
}
