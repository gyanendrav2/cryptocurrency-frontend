import React from "react"
import { Box, Element, Flex, Grid } from "@react-cssx/core"
import { CoinsIcon } from "../../icons/coinsIcon"
import data from "../../../data/xcmData.json"
import { Container } from "../../../ui/Container"
import { DiagramIcon } from "../../icons/diagramIcon"
import { whatXcmStyle } from "../cssxStyle/whatxcm"

export function WhatXcmCard() {
  const classes = whatXcmStyle
  return (
    <div className="whatxcm__wrapper" style={{ position: "relative" }}>
      <Element
        as="img"
        src="xcmbg/hero_bottom.svg"
        cssx={{ pos: "absolute", top: 0, right: 0, transform: "translateY(-5px)" }}
      />
      <Container
        cssx={{
          "@mq": {
            desktop: {
              pb: "10rem",
            },
          },
        }}
      >
        <Grid
          columns={{ _: 1, desktop: 2 }}
          cssx={{
            pt: "4rem",
            "@mq": {
              tablet: { pt: "4rem" },
              desktop: {
                pt: "0",
              },
            },
          }}
        >
          <Flex
            align="flex-start"
            justify="center"
            wrap="nowrap"
            direction="column"
            cssx={{
              pr: { _: 0, desktop: 24 },
              pt: { xsm: "2rem" },
              backgroundColor: "transparent",
            }}
          >
            <Element cssx={classes.h2}>{data.what_title}</Element>
            <Box cssx={classes.coinIcon}>
              <CoinsIcon />
            </Box>
            <Element cssx={classes.h6}>{data.what_subtitle}</Element>
            <Element cssx={classes.P}>{data.what_content}</Element>
          </Flex>
          <Flex
            align="flex-start"
            justify="flex-end"
            wrap="nowrap"
            direction="column"
            cssx={classes.limitedContainer}
          >
            <Box cssx={classes.diagramIcon}>
              <DiagramIcon />
            </Box>
            <Element cssx={classes.h6}>{data.limited_subTitle}</Element>
            <Element cssx={classes.P}>{data.limited_content}</Element>
          </Flex>
        </Grid>
      </Container>
    </div>
  )
}
