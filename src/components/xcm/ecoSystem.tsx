import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import { ecoSyemStyle } from "./cssxStyle/ecosystem"
import BulletIcon from "../icons/bulletIcon"

export function EcoSystem() {
  const classes = ecoSyemStyle
  const ecoSystemData = [
    { icon: BulletIcon, name: "0% maker fee" },
    { icon: BulletIcon, name: "0.1% fee paid selling currency" },
    { icon: BulletIcon, name: "50% of all XCM from exchange fees is vaulted" },
    { icon: BulletIcon, name: "Remaining XCM is returned to treasury" },
  ]
  return (
    <>
      <Element
        as="img"
        src="xcmbg/ecosystem_top.png"
        alt="ecosystem top bg"
        cssx={{ transform: "translateY(2px)" }}
      />
      <Box cssx={classes.wrapper}>
        <Element as="h4" cssx={classes.heading}>
          <span> XCM </span>in the CoinMetro ecosystem
        </Element>
        <Element as="p" cssx={classes.title}>
          Exchanges fees are collected in EUR. All EUR from fees is used to market buy XCM
        </Element>
        <Box cssx={{ p: "1.5rem", maxWidth: "27rem", margin: "auto" }}>
          {ecoSystemData.map((item) => (
            <Flex
              cssx={{
                mb: 24,
                alignItems: "baseline",
                "@mq": {
                  tablet: {
                    alignItems: "center",
                  },
                },
              }}
            >
              <Element
                cssx={{
                  mr: 17,
                }}
              >
                <item.icon />
              </Element>
              <Flex
                as="P"
                cssx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  lineHeight: "1.5rem",
                  color: "white",
                }}
              >
                {item.name}
              </Flex>
            </Flex>
          ))}
        </Box>
        <Element
          as="img"
          cssx={classes.imgMob}
          src="xcmbg/ecosystemMob.png"
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
      <Box cssx={{ bg: "grey.bg" }}>
        <Element
          as="img"
          src="xcmbg/ecobottomCurve.svg"
          alt="eco system bottom bg"
          cssx={{
            ml: "auto",
            display: "none",
            "@mq": {
              tablet: {
                display: "block",
              },
            },
          }}
        />
        <Element
          as="img"
          src="xcmbg/bgBottomMobCurve.svg"
          alt="eco system bottom bg"
          cssx={{
            ml: "auto",
            transform: "translateY(-2px)",
            "@mq": {
              tablet: {
                display: "none",
              },
            },
          }}
        />
      </Box>
    </>
  )
}
