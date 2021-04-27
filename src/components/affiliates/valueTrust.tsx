import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { valueTrustStyle } from "./cssxStyle/valueTrustStyle"

export default function ValueTrust() {
  const classes = valueTrustStyle
  return (
    <Box cssx={classes.wrapper}>
      <Container>
        <Element as="h1" cssx={classes.heading}>
          We value trust
        </Element>
        <Flex align="center" justify="space-between">
          <Box>
            <Element as="img" src="affiliates/safeSecure.png" />
            <Element as="p" cssx={classes.p}>
              Licensed & secure
            </Element>
          </Box>
          <Box>
            <Element as="img" src="affiliates/trusted.png" />
            <Element as="p" cssx={classes.p}>
              Transparent
            </Element>
          </Box>
          <Box>
            <Element as="img" src="affiliates/instantPayment.png" />
            <Element as="p" cssx={classes.p}>
              Instant payments
            </Element>
          </Box>
          <Box>
            <Element as="img" src="affiliates/safeSecure.png" />
            <Element as="p" cssx={classes.p}>
              Trusted by thousands
            </Element>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
