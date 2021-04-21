import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { WhyXcmStyle } from "./cssxStyle/whyxcm"
import { Container } from "../../ui/Container"

const whyXcmData = [
  {
    title: "Why XCM?",
    description:
      "XCM is the token of the CoinMetro ecosystem. It is a platform token that fuels the whole platform and rewards our customers for actions taken on the platform. It is the platform token of the future with the most promise and we've got a lot more in the works. Watch this space!",
  },
]

export function WhyXcm() {
  const classes = WhyXcmStyle
  return (
    <Box cssx={classes.wrapper}>
      <Container cssx={{ m: "auto" }}>
        <Grid columns={{ _: 1, desktop: 2 }}>
          <Box cssx={classes.leftWrapper}>
            <Element as="img" cssx={classes.horseBig} src="xcmbg/horseBig.svg" alt="Horse" />
            <Element as="img" cssx={classes.horseSmall} src="xcmbg/horseSmall.svg" alt="Horse" />
          </Box>
          <Box>
            {whyXcmData.map((item) => (
              <Flex
                align="flex-start"
                justify="center"
                wrap="nowrap"
                direction="column"
                cssx={{ mb: 24 }}
              >
                <Element cssx={classes.h2}>{item.title}</Element>
                <Element cssx={classes.P}>{item.description}</Element>
              </Flex>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
