import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { Container } from "../../ui/Container"
import { careerKnowStyle } from "./cssxStyle/know"

function CareerKnow() {
  return (
    <Box cssx={careerKnowStyle.careerWrapper}>
      <Element
        as="img"
        src="/career/vacancy_bottom_curve.svg"
        cssx={careerKnowStyle.curve}
        alt="vacancy bottom curve"
      />
      <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
        <Element as="h1" cssx={careerKnowStyle.heading}>
          Did you know
        </Element>
      </Flex>
      <Container cssx={{ mx: "auto", textAlign: "center" }}>
        <Flex align="center" justify="center">
          <Grid columns={{ _: 1, tablet: 2 }} columnGap={24}>
            <Box cssx={careerKnowStyle.factCard}>
              <Element as="p" cssx={careerKnowStyle.factText}>
                Some data and facts about CoinMetro.
              </Element>
            </Box>
            <Box cssx={careerKnowStyle.factCard}>
              <Element as="p" cssx={careerKnowStyle.factText}>
                Our CEO has the largest forehead in Tallinn
              </Element>
            </Box>
          </Grid>
        </Flex>
        <Flex align="center" justify="center">
          <Grid columns={{ _: 1, tablet: 2 }} columnGap={24}>
            <Box cssx={careerKnowStyle.factCard}>
              <Element as="p" cssx={careerKnowStyle.factText}>
                CoinMetro was born in 2017
              </Element>
            </Box>
            <Box cssx={careerKnowStyle.factCard}>
              <Element as="p" cssx={careerKnowStyle.factText}>
                We have clients from over 100+ countries
              </Element>
            </Box>
          </Grid>
        </Flex>
        <Box
          cssx={{
            "@mq": {
              tablet: {
                // height: "11.875rem",
                height: "3.875rem",
              },
            },
          }}
        />
      </Container>
      <Box cssx={{ pos: "relative" }}>
        <Element
          as="img"
          src="career/know_city.svg"
          cssx={careerKnowStyle.deskCityImg}
          alt="city"
        />
        <Element
          as="img"
          src="/career/know_bottom_curve.svg"
          cssx={careerKnowStyle.knowBottomcurve}
          alt="career bottom curve"
        />
      </Box>
    </Box>
  )
}

export default CareerKnow
