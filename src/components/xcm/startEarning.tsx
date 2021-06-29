import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Button } from "../../ui/Button"
import { Container } from "../../ui/Container"
import { startEarningStyle } from "./cssxStyle/startEarning"

export default function StartEarning() {
  const classes = startEarningStyle
  return (
    <>
      <Box cssx={{ bg: "grey.bg" }}>
        <Element as="img" src="/xcmbg/curveRight.svg" cssx={{ pos: "relative", ml: "auto" }} />
        <Box
          cssx={{
            bg: "grey.dark",
            position: "relative",
            pt: "3.5rem",
            pb: "21rem",
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
                  Start earning with Coinmetro!
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
                  Log in or sign up to our platform and get started.
                </Element>
                <Button
                  as="a"
                  href="https://go.coinmetro.com/"
                  variant="yellow"
                  cssx={{
                    px: 42,
                    py: 20,
                    my: "2rem",
                    w: "100%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    zIndex: 5,
                  }}
                >
                  Buy XCM Now
                </Button>
              </Box>
            </Grid>
            <Element as="img" src="/xcmbg/startEarningConDesk.png" cssx={classes.imgDesk} />
            <Element as="img" src="/xcmbg/startEarningConTab.png" cssx={classes.imgTab} />
            <Element as="img" src="/xcmbg/startEarningConTab.png" cssx={classes.imgMob} />
            <Element
              as="img"
              src="/xcmbg/lines.svg"
              cssx={{
                pos: "absolute",
                left: 0,
                bottom: 0,
                top: 0,
                right: 0,
                "@mq": {
                  xsm: {
                    top: "8rem",
                  },
                  phablet: {
                    top: "4rem",
                  },
                },
              }}
            />
          </Container>
        </Box>
      </Box>
      <Box cssx={{ bg: "grey.dark", pt: "1rem", pb: "1rem", my: "auto" }}>
        <Element
          as="hr"
          cssx={{
            color: "teal.light",
            mx: "auto",
            "@mq": {
              xsm: {
                width: "90%",
              },
              phablet: {
                width: "95%",
              },
              tablet: {
                maxWidth: "720px",
              },
              desktop: {
                maxWidth: "1040px",
              },
            },
          }}
        />
        {/* <Box
          cssx={{ borderBottom: "1px solid", borderColor: "teal.light", width: "1000px", mx: "auto" }}
        /> */}
      </Box>
    </>
  )
}
