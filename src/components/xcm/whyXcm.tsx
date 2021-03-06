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
    <>
      <Box cssx={classes.wrapper}>
        <Container cssx={{ m: "auto" }}>
          <Grid columns={{ _: 1, desktop: 2 }} cssx={classes.flexBox}>
            <Box cssx={classes.leftWrapper}>
              <Element as="img" cssx={classes.horseBig} src="xcmbg/horseBig.png" alt="Horse" />
              <Element as="img" cssx={classes.horseSmall} src="xcmbg/horseSmall.png" alt="Horse" />
            </Box>
            <Box
              cssx={{
                "@mq": {
                  desktop: {
                    mt: "-12rem",
                  },
                },
              }}
            >
              {whyXcmData.map((item) => (
                <Flex
                  align="flex-start"
                  justify="center"
                  wrap="nowrap"
                  direction="column"
                  cssx={{ mb: 24, textAlign: "left" }}
                >
                  <Element cssx={classes.h2}>{item.title}</Element>
                  <Element cssx={classes.P}>{item.description}</Element>
                </Flex>
              ))}
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
