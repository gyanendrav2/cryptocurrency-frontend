import { Box, Element } from "@react-cssx/core"
import React from "react"
import { Button } from "../../ui/Button"
import { Container } from "../../ui/Container"
import { StartEarningStyle } from "./cssxStyle/startEarningStyle"

export default function StartEarning() {
  const classes = StartEarningStyle
  return (
    <>
      <Element
        as="img"
        src="affiliates/startEarningcurveTop.png"
        alt="top curve"
        cssx={{
          maxWidth: "100%",
          height: "auto",
          marginRight: "auto",
        }}
      />
      <Box cssx={classes.wrapper}>
        <Container>
          <Box cssx={classes.headingContainer}>
            <Element as="h1" cssx={classes.heading}>
              Start earning crypto with CoinMetro!
            </Element>
            <Element as="p" cssx={classes.bigP}>
              Log in or sign up to get started.
            </Element>
            <Button
              as="a"
              variant="yellow"
              cssx={{
                py: 14,
                fontSize: 16,
                "@mq": {
                  desktop: {
                    mr: "auto",
                  },
                },
              }}
            >
              Start Earning
            </Button>
          </Box>
        </Container>
      </Box>
      <Element
        as="img"
        src="affiliates/startEarningCurveBottom.png"
        alt="top curve"
        cssx={{
          maxWidth: "100%",
          height: "auto",
          marginLeft: "auto",
          transform: "translateY(-2px)",
        }}
      />
    </>
  )
}
