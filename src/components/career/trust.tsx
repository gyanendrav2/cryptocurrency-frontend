import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { trustStyle } from "./cssxStyle/trust"
import { Container } from "../../ui/Container"

function CareerTrust() {
  return (
    <Box cssx={trustStyle.trustWrapper}>
      <Element
        as="img"
        src="/career/join_bottomCurve.svg"
        cssx={trustStyle.trustBottomcurve}
        alt="career bottom curve"
      />
      <Container>
        <Flex align="center" justify="center">
          <Grid columns={{ _: 1, tablet: 2 }} columnGap={24}>
            <Flex
              align="center"
              justify="center"
              direction="column"
              cssx={trustStyle.iconContainer}
            >
              <Element as="p" cssx={trustStyle.text}>
                You can also find us on social media
              </Element>
              <Flex>
                <Element as="a" href="#" target="_blank">
                  <Element
                    as="img"
                    src="/career/icon_facebook.svg"
                    alt="icon_facebook"
                    cssx={trustStyle.icon}
                  />
                </Element>
                <Element as="a" href="#" target="_blank">
                  <Element
                    as="img"
                    src="/career/icon_linkedin.svg"
                    alt="icon_linkedin"
                    cssx={trustStyle.icon}
                  />
                </Element>
                <Element as="a" href="#" target="_blank">
                  <Element
                    as="img"
                    src="/career/icon_telegram.svg"
                    alt="icon_telegram"
                    cssx={trustStyle.icon}
                  />
                </Element>
                <Element as="a" href="#" target="_blank">
                  <Element
                    as="img"
                    src="/career/icon_twitter.svg"
                    alt="icon_twitter"
                    cssx={trustStyle.icon}
                  />
                </Element>
                <Element as="a" href="#" target="_blank">
                  <Element
                    as="img"
                    src="/career/icon_youtube.svg"
                    alt="icon_youtube"
                    cssx={trustStyle.icon}
                  />
                </Element>
              </Flex>
            </Flex>
            <Box cssx={trustStyle.imageContainer}>
              <Element as="img" src="/career/trustpilot.svg" alt="trust-pilot" />
            </Box>
          </Grid>
        </Flex>
      </Container>
    </Box>
  )
}

export default CareerTrust
