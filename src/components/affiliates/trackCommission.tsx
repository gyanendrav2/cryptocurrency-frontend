import { Box, Element, Flex, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { trackCommissionStyle } from "./cssxStyle/trackCommissionStyle"
import BulletIcon from "../icons/bulletIcon"

export default function TrackCommission() {
  const classes = trackCommissionStyle
  const progressData = [
    { icon: BulletIcon, name: "Earn crypto without limits" },
    { icon: BulletIcon, name: "Lifetime payouts" },
    { icon: BulletIcon, name: "Track your referrals" },
  ]
  return (
    <>
      <Box cssx={{ bg: "grey.bg" }}>
        <Element
          as="img"
          src="affiliates/comBgCurveTop.svg"
          alt="top curve"
          cssx={{ transform: "translateY(2px)" }}
        />
        <Box
          cssx={{
            bg: "grey.dark",
            position: "relative",
            overflow: "hidden",
            pt: "2.5rem",
            pb: "20rem",
            "@mq": {
              phablet: {
                pb: "30rem",
              },
              tablet: {
                pt: "5.6875rem",
                pb: "27rem",
              },
              desktop: {
                pt: "7.6875rem",
              },
            },
          }}
        >
          <Container>
            <Grid columns={{ _: 1, desktop: 2 }}>
              <Box
                cssx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "@mq": {
                    desktop: {
                      display: "block",
                    },
                  },
                }}
              >
                <Element as="h4" cssx={classes.heading}>
                  Track your referrals & commissions
                </Element>
                <Element as="p" cssx={classes.paragraph}>
                  Keep track of your progress in one place.
                </Element>
                <Box>
                  {progressData.map((item) => (
                    <Flex
                      cssx={{
                        mb: 24,
                        alignItems: "baseline",
                        "@mq": {
                          tablet: {
                            alignItems: "center",
                          },
                        },
                      }}
                    >
                      <Element
                        cssx={{
                          mr: 17,
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
                <Flex
                  as="a"
                  cssx={{
                    my: "auto",
                    textDecoration: "underline",
                    color: "white",
                  }}
                  href="#"
                  target="_blank"
                  align="center"
                >
                  Read more in terms and conditions
                </Flex>
              </Box>
              <Box>
                <Element as="img" src="affiliates/commissionProduct.png" cssx={classes.imgDesk} />
                <Element as="img" src="affiliates/comissionProductTab.png" cssx={classes.imgTab} />
                <Element as="img" src="affiliates/comissionProductMob.png" cssx={classes.imgMob} />
              </Box>
            </Grid>
            <Element
              as="img"
              src="/xcmbg/lines.svg"
              cssx={{
                pos: "absolute",
                left: 0,
                bottom: 0,
                top: "8rem",
                right: 0,
                transform: "scale(2.5)",
                "@mq": {
                  tablet: {
                    transform: "unset",
                    top: "0",
                  },
                },
              }}
            />
          </Container>
        </Box>
      </Box>
      <Element
        as="img"
        src="affiliates/comBgCurveBottom.svg"
        cssx={{ ml: "auto", transform: "translateY(-2px)" }}
        alt="top curve"
      />
    </>
  )
}
