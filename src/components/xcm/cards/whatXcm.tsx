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
    <div className="whatxcm__wrapper">
      {/* <Element
        as="img"
        src="xcmbg/curvebg.svg"
        cssx={{ pos: "absolute", top: 0, right: 0, w: "100%" }}
        alt=""
      /> */}
      <Container>
        <Grid columns={{ _: 1, desktop: 2 }}>
          <Flex
            align="flex-start"
            justify="center"
            wrap="nowrap"
            direction="column"
            cssx={{
              pr: { _: 0, desktop: 24 },
              backgroundColor: "transparent",
              // mt: { _: 0, desktop: 88 },
              zIndex: 2,
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
