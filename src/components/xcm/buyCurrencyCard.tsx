import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { Button } from "../../ui/Button"
import { buyCurrencyCardStyle } from "./cssxStyle/buyCurrencyCard"
import { CurrencyPicker } from "../currency/currencyPicker"
// import Logo from "../../../public/logo.svg"
// import Inputcoinmetrologo from "../../../public/inputcoinmetrologo.svg"

// import { formStyle } from "./cssxStyle/form"

export function BuyCurrencyCard() {
  const classes = buyCurrencyCardStyle
  return (
    <Box cssx={{ pos: "relative" }}>
      <Flex
        align="flex-start"
        justify="flex-start"
        wrap="nowrap"
        direction="column"
        cssx={classes.wrapper}
      >
        <Element cssx={classes.h4}>Buy XCM</Element>
        <form style={{ width: "100%" }}>
          <Flex
            align="center"
            justify="space-between"
            wrap="nowrap"
            direction="row"
            cssx={{ mb: 6 }}
          >
            <Element as="input" required placeholder="0.212" cssx={classes.input1} />
            <CurrencyPicker />
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            wrap="nowrap"
            direction="row"
            cssx={{ mb: 6 }}
          >
            <Element as="p" cssx={{ ml: 20, color: "white", mb: 24 }}>
              Coinmetro price $0.2136
            </Element>
          </Flex>
          <Flex align="center" justify="space-between" wrap="nowrap" direction="row">
            <Element as="input" required placeholder="PAY WITH" cssx={classes.input1} />
            <CurrencyPicker />
          </Flex>
        </form>
        <Button
          as="a"
          href="https://go.coinmetro.com/"
          variant="yellow"
          cssx={{
            // px: 16,
            py: 20,
            my: "2rem",
            w: "100%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          Buy Now
        </Button>
      </Flex>
      <Element as="img" cssx={classes.img} src="xcmbg/earthflag.png" alt="earth top flag" />
    </Box>
  )
}
