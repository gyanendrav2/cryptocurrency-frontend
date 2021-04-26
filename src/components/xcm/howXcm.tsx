import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { howXcmStyle } from "./cssxStyle/howXcm"
import BulletIcon from "../icons/bulletIcon"
import { Container } from "../../ui/Container"

interface HowDataItem {
  icon: React.ReactChild
  name: string
}

const howXcmDataLeft = [
  { icon: BulletIcon, name: "All CoinMetro fees are transacted in XCM" },
  { icon: BulletIcon, name: "Locking rewards are paid in XCM" },
  { icon: BulletIcon, name: "Staking rewards are paid in XCM" },
]
const howXcmDataRight = [
  { icon: BulletIcon, name: "Referral rewards are paid in XCM" },
  { icon: BulletIcon, name: "-50% of fees in XCM are vaulted" },
]

export function HowXcm() {
  const classes = howXcmStyle
  return (
    <>
      <Box cssx={classes.wrapper}>
        <Container cssx={{ pb: 80 }}>
          <Element as="h2" cssx={classes.heading}>
            How is XCM used?
          </Element>
          <Container cssx={{ m: "auto" }}>
            <Grid columns={{ _: 1, desktop: 2 }} columnGap={112}>
              <Box>
                {howXcmDataLeft.splice(0, 3).map((item) => (
                  <Flex align="flex-start" cssx={{ mb: 24 }}>
                    <Element
                      cssx={{
                        mr: 17,
                        // "@mq": {
                        //   xsm: {
                        //     mt: "0.5rem",
                        //   },
                        // },
                      }}
                    >
                      <item.icon />
                    </Element>
                    <Flex
                      as="P"
                      cssx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: "1.5rem",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </Flex>
                  </Flex>
                ))}
              </Box>
              <Box>
                {howXcmDataRight.map((item) => (
                  <Flex align="flex-start" cssx={{ mb: 24 }}>
                    <Element cssx={{ mr: 17 }}>
                      <item.icon />
                    </Element>
                    <Flex
                      as="P"
                      cssx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: "1.5rem",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </Flex>
                  </Flex>
                ))}
              </Box>
            </Grid>
          </Container>
        </Container>
        <Box cssx={{ pos: "relative" }}>
          <Element
            as="img"
            cssx={classes.img}
            src="xcmbg/howxcmbg.png"
            alt="coin metro ecosystem"
          />
          <Element
            as="img"
            cssx={classes.globeImg}
            src="xcmbg/globe.png"
            alt="coin metro ecosystem"
          />
        </Box>
      </Box>
    </>
  )
}
