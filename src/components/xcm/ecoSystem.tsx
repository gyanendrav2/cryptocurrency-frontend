import { Box, Element } from "@react-cssx/core"
import React from "react"
import { ecoSyemStyle } from "./cssxStyle/ecosystem"

export function EcoSystem() {
  const classes = ecoSyemStyle
  return (
    <>
      <Box cssx={classes.wrapper}>
        <Element as="h4" cssx={classes.heading}>
          <span> XCM </span>in the CoinMetro ecosystem
        </Element>
        <Element as="p" cssx={classes.title}>
          Exchanges fees are collected in EUR. All EUR from fees is used to market buy XCM
        </Element>
        <Element
          as="img"
          cssx={classes.img}
          src="xcmbg/earthEcosystem.png"
          alt="coin metro ecosystem"
        />
      </Box>
      <Box cssx={classes.wrapper2} />
    </>
  )
}
