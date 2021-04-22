import { Element, Flex } from "@react-cssx/core"
import React from "react"
import { ArrowdownIcon } from "../icons/arrowdownIcon"
import { InfoIcon } from "../icons/infoIcon"

export function CurrMarketCard() {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="nowrap"
      cssx={{
        p: 24,
        backgroundColor: "grey.dark2",
        borderRadius: 8,
        maxWidth: 416,
        mx: "auto",
        "@mq": {
          xsm: {
            mt: 16,
          },
          desktop: {
            mt: 118,
          },
        },
      }}
    >
      <Flex align="center" justify="space-between" wrap="nowrap" cssx={{ zIndex: "3" }}>
        <InfoIcon />
        <Element as="p" cssx={{ ml: 16, color: "grey.light" }}>
          Current Market Cap
        </Element>
      </Flex>
      <Element as="p" cssx={{ color: "white" }}>
        $64,812,048
      </Element>

      <Flex align="center" justify="space-between" wrap="nowrap" cssx={{ color: "red" }}>
        <ArrowdownIcon />
        <Element as="p" cssx={{ ml: 6.23 }}>
          1,99
        </Element>
      </Flex>
    </Flex>
  )
}
