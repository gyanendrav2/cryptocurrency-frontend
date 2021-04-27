import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { trackCommissionStyle } from "./cssxStyle/trackCommissionStyle"

export default function TrackCommission() {
  const classes = trackCommissionStyle
  return (
    <>
      <Box cssx={{ bg: "grey.bg" }}>
        <Box
          cssx={{
            bg: "grey.dark",
            position: "relative",
            pt: "3.5rem",
            pb: "20rem",
            "@mq": {
              phablet: {
                pb: "30rem",
              },
              tablet: {
                pt: "7.6875rem",
                pb: "27rem",
              },
            },
          }}
        >
          <Container>
            <Grid columns={{ _: 1, desktop: 2 }}>
              <Box>
                <Element
                  as="h4"
                  cssx={{
                    fontSize: 32,
                    lineHeight: "40px",
                    maxWidth: 475,
                    color: "indigo.light",
                    fontWeight: 800,
                    mb: 24,
                    "@mq": {
                      tablet: {
                        fontSize: 48,
                        lineHeight: "56px",
                      },
                    },
                  }}
                >
                  Track your referrals & commissions
                </Element>
                <Element
                  as="p"
                  cssx={{
                    fontSize: 20,
                    lineHeight: "32px",
                    fontWeight: 600,
                    color: "white",
                    mb: 32,
                  }}
                >
                  Keep track of your progress in one place.
                </Element>
              </Box>
            </Grid>
            <Element as="img" src="affiliates/commissionProduct.png" cssx={classes.imgDesk} />
            <Element as="img" src="affiliates/comissionProductTab.png" cssx={classes.imgTab} />
            <Element as="img" src="affiliates/comissionProductMob.png" cssx={classes.imgMob} />
            <Element
              as="img"
              src="/xcmbg/lines.svg"
              cssx={{ pos: "absolute", left: 0, bottom: 0, top: 0, right: 0 }}
            />
          </Container>
        </Box>
      </Box>
    </>
  )
}
