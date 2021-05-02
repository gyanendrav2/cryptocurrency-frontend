import { Box, Element, Flex, Grid } from "@react-cssx/core"
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
        <Flex align="center" justify="center">
          <Grid columns={{ _: 1, tablet: 2, desktop: 4 }} columnGap={116}>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/safeSecure.png" />
              <Element as="p" cssx={classes.p}>
                Licensed & secure
              </Element>
            </Box>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/trusted.png" />
              <Element as="p" cssx={classes.p}>
                Transparent
              </Element>
            </Box>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/instantPayment.png" />
              <Element as="p" cssx={classes.p}>
                Instant payments
              </Element>
            </Box>
            <Box cssx={classes.imgContainer}>
              <Element as="img" src="affiliates/safeSecure.png" />
              <Element as="p" cssx={classes.p}>
                Trusted by thousands
              </Element>
            </Box>
          </Grid>
        </Flex>
      </Container>
    </Box>
  )
}
