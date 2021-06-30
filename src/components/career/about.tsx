import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { aboutStyle } from "./cssxStyle/about"
import { Container } from "../../ui/Container"

function CareerAbout() {
  return (
    <Box cssx={aboutStyle.aboutWrapper}>
      <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
        <Element as="h1" cssx={aboutStyle.heading}>
          About CoinMetro
        </Element>
      </Flex>
      <Container>
        <Flex align="center">
          <Box cssx={{ maxWidth: "37.062rem" }}>
            <Element as="p" cssx={aboutStyle.boldText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, neque iaculis morbi
              diam commodo scelerisque.
            </Element>
            <Element as="p" cssx={aboutStyle.slimText}>
              Semper sapien quis id nunc risus diam, in. Vitae nunc, aliquam sit tempor. Mattis
              placerat purus vivamus placerat sed blandit tellus purus in. Massa lacinia orci, ut
              cursus morbi auctor nunc, scelerisque. Volutpat aenean viverra amet risus in tempor
              neque. Nulla tellus etiam malesuada nec dignissim. Odio lobortis orci sed sagittis,
              vel eu rhoncus. Et rhoncus ac cras dolor.
            </Element>
          </Box>
          <Element as="img" src="/career/mcn.svg" alt="mcn" cssx={aboutStyle.mcn} />
        </Flex>

        <Flex align="center">
          <Element as="img" src="/career/globe.svg" alt="globe" cssx={aboutStyle.globe} />
          <Box cssx={{ maxWidth: "37.062rem" }}>
            <Element as="p" cssx={aboutStyle.boldText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, neque iaculis morbi
              diam commodo scelerisque. Semper sapien quis id nunc risus diam, in.
            </Element>
            <Element as="p" cssx={aboutStyle.slimText}>
              Semper sapien quis id nunc risus diam, in. Vitae nunc, aliquam sit tempor. Mattis
              placerat purus vivamus placerat sed blandit tellus purus in. Massa lacinia orci, ut
              cursus morbi auctor nunc, scelerisque. Volutpat aenean viverra amet risus in tempor
              neque. Nulla tellus etiam malesuada nec dignissim. Odio lobortis orci sed sagittis,
              vel eu rhoncus. Et rhoncus ac cras dolor.
            </Element>
          </Box>
        </Flex>
        <Box cssx={{ height: "11.875rem" }} />
      </Container>
    </Box>
  )
}

export default CareerAbout
