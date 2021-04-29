import { Box, Element } from "@react-cssx/core"
import React from "react"
import { ecoSyemStyle } from "./cssxStyle/ecosystem"

export function EcoSystem() {
  const classes = ecoSyemStyle
  return (
    <>
      {/* <Box cssx={classes.wrapper1} /> */}
      <Element
        as="img"
        src="xcmbg/ecosystem_top.svg"
        alt="top bg"
        cssx={{ transform: "translateY(2px)" }}
      />
      <Box cssx={classes.wrapper}>
        <Element as="h4" cssx={classes.heading}>
          <span> XCM </span>in the CoinMetro ecosystem
        </Element>
        <Element as="p" cssx={classes.title}>
          Exchanges fees are collected in EUR. All EUR from fees is used to market buy XCM
        </Element>
        <Element
          as="img"
          cssx={classes.imgMob}
          src="xcmbg/earthEcosystemMob.png"
          alt="coin metro ecosystem"
        />
        <Element
          as="img"
          cssx={classes.imgTab}
          src="xcmbg/earthEcosystemTab.png"
          alt="coin metro ecosystem"
        />
        <Element
          as="img"
          cssx={classes.imgDesk}
          src="xcmbg/earthEcosystemDesk.png"
          alt="coin metro ecosystem"
        />
      </Box>
      <Box cssx={classes.wrapper2} />
    </>
  )
}
