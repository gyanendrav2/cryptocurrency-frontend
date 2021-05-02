import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { TrustXcmStyle } from "./cssxStyle/trustXcm"
import { Container } from "../../ui/Container"

const trustXcmData = [
  {
    title: "CoinMetro and XCM are all about trust",
    description:
      "We value our customers. We have the industry's highest scored support and we work every day to make sure all our customers' needs are taken care of. We are real people, here for you 24/7.",
  },
]

export function TrustXcm() {
  const classes = TrustXcmStyle

  return (
    <>
      <Box
        cssx={{
          bg: "grey.bg",
          pt: "4rem",
          pb: "5.875rem",
          mt: "-4rem",
          "@mq": {
            tablet: {
              pt: 144,
              pb: 158,
              mt: "unset!important",
            },
          },
        }}
      >
        <Container cssx={{ m: "auto", mb: 69 }}>
          <Grid columns={{ _: 1, tablet: 2 }}>
            <Box>
              {trustXcmData.map((item) => (
                <Flex
                  align="center"
                  justify="flex-end"
                  wrap="nowrap"
                  direction="column"
                  cssx={{ mb: 24 }}
                >
                  <Element as="h2" cssx={classes.h2}>
                    {item.title}
                  </Element>
                  <Element cssx={classes.P}>{item.description}</Element>
                </Flex>
              ))}
            </Box>
            <Box>
              <Element as="img" src="xcmbg/trust.png" alt="trust" />
            </Box>
          </Grid>
        </Container>
        <Container cssx={{ mx: "auto", pl: 0, "@mq": { phablet: { pl: "1.5rem" } } }}>
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="54ad5defc6454f065c28af8b"
            data-businessunit-id="5e7a770cbc92ef0001733f42"
            data-style-height="240px"
            data-style-width="100%"
            data-theme="light"
            data-stars="4,5"
            data-review-languages="en"
            data-font-family="Muli"
          >
            <a href="https://www.trustpilot.com/review/coinmetro.com" rel="noopener">
              Trustpilot
            </a>
          </div>
        </Container>
      </Box>
    </>
  )
}
