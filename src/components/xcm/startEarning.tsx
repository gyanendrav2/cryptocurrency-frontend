import { Box, Element, Grid } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"

export default function StartEarning() {
  return (
    <>
      <Box cssx={{ bg: "grey.bg" }}>
        <Element as="img" src="/xcmbg/curveRight.svg" cssx={{ pos: "relative", ml: "auto" }} />
        <Box cssx={{ bg: "grey.dark", position: "relative", pt: 187, pb: "25rem" }}>
          <Container>
            <Grid columns={{ _: 1, desktop: 2 }}>
              <Box>
                <Element
                  as="h4"
                  cssx={{ fontSize: 48, lineHeight: "56px", maxWidth: 475, color: "indigo.light" }}
                >
                  Start earning with Coinmetro!
                </Element>
                <Element as="p" cssx={{ fontSize: 20, lineHeight: "32px", color: "white" }}>
                  Log in or sign up to our platform and get started.
                </Element>
              </Box>
            </Grid>
            <Element
              as="img"
              src="/xcmbg/startEarningCon.png"
              cssx={{ pos: "absolute", right: 0, top: 120, zIndex: 2 }}
            />
            <Element
              as="img"
              src="/xcmbg/lines.svg"
              cssx={{ pos: "absolute", left: 0, bottom: 0, top: 0, right: 0 }}
            />
          </Container>
        </Box>
      </Box>
      <Box cssx={{ bg: "grey.dark", pt: "1rem", pb: "1rem" }}>
        <Container cssx={{ borderBottom: "1px solid", borderColor: "teal.light" }}>
        </Container>
      </Box>
    </>
  )
}
