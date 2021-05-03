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
      <Element
        as="img"
        src="xcmbg/howxcmTopCurveDesk.svg"
        alt="howused top bg"
        cssx={{
          marginRight: "auto",
          display: "none",
          "@mq": {
            xsm: {
              // transform: "translateY(-2px)",
            },
            tablet: {
              display: "block",
            },
          },
        }}
      />
      <Element
        as="img"
        src="xcmbg/howXcmTopCurveMob.svg"
        alt="howused top bg"
        cssx={{
          marginRight: "auto",
          "@mq": {
            tablet: {
              display: "none",
            },
          },
        }}
      />
      <Box cssx={{ pos: "relative" }}>
        <Box cssx={classes.wrapper}>
          <Element
            as="img"
            src="xcmbg/howBgstars.svg"
            cssx={{
              pos: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              w: "100%",
              height: "100%",
            }}
          />
          <Box cssx={{ pos: "absolute", top: 0, left: 0, right: 0, w: "100%", height: "5rem" }} />
          <Container
            cssx={{
              pb: 32,
              "@mq": {
                tablet: { pb: 80 },
                desktop: { pb: 0 },
              },
            }}
          >
            <Element as="h2" cssx={classes.heading}>
              How is XCM used?
            </Element>
            <Container cssx={{ m: "auto" }}>
              <Grid
                columns={{ _: 1, desktop: 2 }}
                columnGap={112}
                cssx={{
                  maxWidth: 336,
                  mx: "auto",
                  "@mq": {
                    desktop: {
                      maxWidth: "unset!important",
                      mx: "unset",
                    },
                  },
                }}
              >
                <Box
                  cssx={{
                    "@mq": {
                      xsm: {
                        ml: -20,
                      },
                      phablet: {
                        ml: "unset",
                      },
                    },
                  }}
                >
                  {howXcmDataLeft.splice(0, 3).map((item) => (
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
                <Box
                  cssx={{
                    "@mq": {
                      xsm: {
                        ml: -20,
                      },
                      phablet: {
                        ml: "unset",
                      },
                    },
                  }}
                >
                  {howXcmDataRight.map((item) => (
                    <Flex
                      align="flex-start"
                      cssx={{
                        mb: 24,
                        alignItems: "baseline",
                        display: "flex",
                        "@mq": {
                          tablet: {
                            alignItems: "center",
                          },
                        },
                      }}
                    >
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
        </Box>
        <Box
          cssx={{
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 3,
            bottom: "1rem",
            "@mq": {
              phablet: {
                bottom: "-1rem",
              },
              tablet: {
                top: "unset",
                bottom: "2rem",
              },
              desktop: {
                bottom: "1rem",
              },
            },
          }}
        >
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
        <Element
          as="img"
          cssx={{
            ml: "auto",
            mt: "-2px",
            display: "none",
            "@mq": {
              desktop: {
                display: "block",
              },
            },
          }}
          src="xcmbg/howxcmBottomCurveDesk.svg"
        />
        <Element
          as="img"
          cssx={{
            ml: "auto",
            mt: "-2px",
            display: "none",
            "@mq": {
              tablet: {
                display: "block",
              },
              desktop: {
                display: "none",
              },
            },
          }}
          src="xcmbg/howxcmBottomTabCurve.svg"
        />
        <Element
          as="img"
          cssx={{
            ml: "auto",
            mt: "-2px",
            "@mq": {
              tablet: {
                display: "none",
              },
            },
          }}
          src="xcmbg/howXcmBottomMobCurve.svg"
        />
      </Box>
    </>
  )
}
