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
    <Box cssx={classes.wrapper}>
      <Container>
        <Grid columns={{ _: 1, desktop: 2 }}>
          <Flex
            align="flex-start"
            justify="center"
            wrap="nowrap"
            direction="column"
            cssx={{
              p: 24,
              backgroundColor: "transparent",
              // mt: { _: 0, desktop: 88 },
              zIndex: 2,
            }}
          >
            <Element cssx={classes.h2}>{data.what_title}</Element>
            <CoinsIcon />
            <Element cssx={classes.h6}>{data.what_subtitle}</Element>
            <Element cssx={classes.P}>{data.what_content}</Element>
          </Flex>
          <Flex
            align="center"
            justify="flex-end"
            wrap="nowrap"
            direction="column"
            cssx={{
              p: 24,
              backgroundColor: "transparent",
              // mt: { _: 0, desktop: 88 },
              paddingTop: 433,
              zIndex: 2,
            }}
          >
            <DiagramIcon cssx={`header__icon ${classes.DiagramIconStyles}`} />
            <Element cssx={classes.h6}>{data.limited_subTitle}</Element>
            <Element cssx={classes.P}>{data.limited_content}</Element>
          </Flex>
        </Grid>
      </Container>
    </Box>
  )
}
