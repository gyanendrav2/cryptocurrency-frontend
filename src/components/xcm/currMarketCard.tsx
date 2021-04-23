import { Element, Flex } from "@react-cssx/core"
import React from "react"
import { ArrowdownIcon } from "../icons/arrowdownIcon"
import { InfoIcon } from "../icons/infoIcon"
import { headerStyle } from "./cssxStyle/header"

export function CurrMarketCard() {
  const classes = headerStyle
  return (
    <Flex align="center" justify="space-between" wrap="nowrap" cssx={classes.cardWrapper}>
      <Flex
        align="center"
        justify="space-between"
        wrap="nowrap"
        direction={{ base: "column", tablet: "row" }}
        cssx={{
          zIndex: "3",
          "@mq": { _: { flexDirection: "column" }, tablet: { flexDirection: "row" } },
        }}
      >
        <Flex align="center" justify="space-between" wrap="nowrap">
          <InfoIcon />
          <Element as="p" cssx={{ ml: 16, color: "grey.light" }}>
            Current Market Cap
          </Element>
        </Flex>
        <Element as="p" cssx={{ color: "white", ml: 16 }}>
          $64,812,048
        </Element>
      </Flex>

      <Flex align="center" justify="space-between" wrap="nowrap" cssx={{ color: "red" }}>
        <ArrowdownIcon />
        <Element as="p" cssx={{ ml: 6.23 }}>
          1,99
        </Element>
      </Flex>
    </Flex>
  )
}
