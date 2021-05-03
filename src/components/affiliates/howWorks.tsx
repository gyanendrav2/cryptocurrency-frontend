import { Box, Element, Flex, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { HowWorksStyle } from "./cssxStyle/howWorkStyle"

export default function HowWorks() {
  const classes = HowWorksStyle
  return (
    <Box cssx={{ bg: "white" }}>
      <Container>
        <Grid columns={{ _: 1, desktop: 2 }} columnGap={62}>
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
          <Box cssx={classes.listContainer}>
            <ul>
              <li>
                <Flex align="flex-start">
                  <Flex align="center" justify="center" cssx={classes.cicle}>
                    1
                  </Flex>
                  <Box cssx={{ w: "calc(100% - 3rem)" }}>
                    <Element as="p" cssx={classes.stepHeading}>
                      Get your link
                    </Element>
                    <Element as="p" cssx={classes.stepDes}>
                      Dash over to our &nbsp;
                      <span style={{ cursor: "pointer", textDecoration: "underline" }}>
                        dashboard
                      </span>
                      &nbsp; and get your affiliate link
                    </Element>
                  </Box>
                </Flex>
              </li>
              <li>
                <Flex align="flex-start">
                  <Flex align="center" justify="center" cssx={classes.cicle}>
                    2
                  </Flex>
                  <Box cssx={{ w: "calc(100% - 3rem)" }}>
                    <Element as="p" cssx={classes.stepHeading}>
                      Promote CoinMetro
                    </Element>
                    <Element as="p" cssx={classes.stepDes}>
                      Share with friends or promote on your channels
                    </Element>
                  </Box>
                </Flex>
              </li>
              <li>
                <Flex align="flex-start">
                  <Flex align="center" justify="center" cssx={classes.cicleLast}>
                    3
                  </Flex>
                  <Box cssx={{ w: "calc(100% - 3rem)" }}>
                    <Element as="p" cssx={classes.stepHeading}>
                      Earn without limits
                    </Element>
                    <Element as="p" cssx={classes.stepDes}>
                      Once they start trading, you will receive €5 and make up to 50% of our net
                      fees
                    </Element>
                  </Box>
                </Flex>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
