import React from "react"
import { useRouter } from "next/dist/client/router"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { jobinfoStyle } from "./cssxStyles/jobinfo"
import { Container } from "../../ui/Container"

function JobInfo() {
  const route = useRouter()
  return (
    <Box cssx={jobinfoStyle.jobWrapper}>
      <Container>
        <Element as="p" cssx={jobinfoStyle.backLink} onClick={() => route.push("./positions")}>
          <span>&#60;</span> Back to positions
        </Element>
        <Element as="h1" cssx={jobinfoStyle.heading}>
          Head of Global Influencer Relations & Communications
        </Element>
        <Element as="p" cssx={jobinfoStyle.place}>
          Tallinn, Estonia
        </Element>

        <Grid columns={{ _: 1, desktop: 2 }} columnGap={112} cssx={jobinfoStyle.jobinfo}>
          <Flex align="" justify="left" direction="column">
            <Box>
              <Element as="p" cssx={jobinfoStyle.jobinfoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam habitasse
                sodales ut purus cras. Mi egestas est eget dignissim. Pulvinar orci iaculis sagittis
                eget nisl sed nulla nibh vestibulum. Nisl feugiat sed pretium, ut at venenatis
                posuere interdum.
              </Element>
              <Element as="p" cssx={jobinfoStyle.jobinfoText}>
                Sed fermentum sem vestibulum purus morbi urna, faucibus amet. Dignissim neque, eros
                faucibus in. Pellentesque vitae leo morbi nisl commodo leo bibendum venenatis. In
                pretium, velit augue aliquet elit viverra venenatis morbi semper. Duis sem diam
                tellus elementum in blandit feugiat suspendisse. In pretium, velit augue aliquet
                elit viverra venenatis morbi semper. In pretium, velit augue aliquet elit viverra
                venenatis morbi semper.
              </Element>
            </Box>
            <Box>
              <Element as="h1" cssx={jobinfoStyle.textHeading}>
                What you’ll do:
              </Element>
              <Element as="p" cssx={jobinfoStyle.listItemText}>
                <ul style={{ listStyle: "unset" }}>
                  <li>
                    Sed cursus diam habitasse sodales ut purus cras. Mi egestas est eget dignissim.
                    Pulvinar orci iaculis sagittis eget nisl sed nulla nibh vestibulum.
                  </li>
                  <li>
                    Nisl feugiat sed pretium, ut at venenatis posuere interdum. Sed fermentum sem
                    vestibulum purus morbi urna, faucibus amet.
                  </li>
                  <li>
                    Dignissim neque, eros faucibus in. Pellentesque vitae leo morbi nisl commodo leo
                    bibendum venenatis. In pretium, velit augue aliquet elit viverra venenatis morbi
                    semper.
                  </li>
                  <li>Duis sem diam tellus elementum in blandit feugiat suspendisse.</li>
                </ul>
              </Element>
            </Box>
            <Box>
              <Element as="h1" cssx={jobinfoStyle.textHeading}>
                Who you are:
              </Element>
              <Element as="p" cssx={jobinfoStyle.listItemText}>
                <ul style={{ listStyle: "unset" }}>
                  <li>
                    Sed cursus diam habitasse sodales ut purus cras. Mi egestas est eget dignissim.
                    Pulvinar orci iaculis sagittis eget nisl sed nulla nibh vestibulum.
                  </li>
                  <li>
                    Nisl feugiat sed pretium, ut at venenatis posuere interdum. Sed fermentum sem
                    vestibulum purus morbi urna, faucibus amet.
                  </li>
                  <li>
                    Dignissim neque, eros faucibus in. Pellentesque vitae leo morbi nisl commodo leo
                    bibendum venenatis. In pretium, velit augue aliquet elit viverra venenatis morbi
                    semper.
                  </li>
                  <li>Duis sem diam tellus elementum in blandit feugiat suspendisse.</li>
                </ul>
              </Element>
            </Box>
            <Box>
              <Element as="h1" cssx={jobinfoStyle.textHeading}>
                Where you’ll be:
              </Element>
              <Element as="p" cssx={jobinfoStyle.listItemText}>
                <ul style={{ listStyle: "unset" }}>
                  <li>
                    Sed cursus diam habitasse sodales ut purus cras. Mi egestas est eget dignissim.
                    Pulvinar orci iaculis sagittis eget nisl sed nulla nibh vestibulum.
                  </li>
                  <li>
                    Nisl feugiat sed pretium, ut at venenatis posuere interdum. Sed fermentum sem
                    vestibulum purus morbi urna, faucibus amet.
                  </li>
                  <li>
                    Dignissim neque, eros faucibus in. Pellentesque vitae leo morbi nisl commodo leo
                    bibendum venenatis. In pretium, velit augue aliquet elit viverra venenatis morbi
                    semper.
                  </li>
                  <li>Duis sem diam tellus elementum in blandit feugiat suspendisse.</li>
                </ul>
              </Element>
            </Box>
          </Flex>
          <Flex>
            <h1>Application</h1>
            <Element as="img" src="/career/jobinfo_ship.svg" alt="trust-pilot" />
          </Flex>
        </Grid>
      </Container>
    </Box>
  )
}

export default JobInfo
