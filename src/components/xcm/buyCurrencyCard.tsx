import React, { useEffect, useState } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { Button } from "../../ui/Button"
import { buyCurrencyCardStyle } from "./cssxStyle/buyCurrencyCard"
import { CurrencyPicker } from "../currency/currencyPicker"
import { CurrencyOptionsInterface } from "../../interfaces/currencyOptionsInterface"
import { CurrMarketCard } from "./currMarketCard"
import { xcmRatesAPIcall } from "../../API/xcmAPI"
// import Logo from "../../../public/logo.svg"
// import Inputcoinmetrologo from "../../../public/inputcoinmetrologo.svg"

// import { formStyle } from "./cssxStyle/form"

export function BuyCurrencyCard() {
  const classes = buyCurrencyCardStyle
  const [currData, setCurrData] = useState({ XCM: "" })
  const [coinmetro, setCoinmetro] = useState<CurrencyOptionsInterface>({
    name: "XCM",
    currency: "coinmetro",
    flag: "xcmFlags/input-coinmetro-logo.svg",
  })
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOptionsInterface>({
    name: "EUR",
    currency: "EURO",
    flag: "xcmFlags/europeFlag.png",
  })
  const [payWithValue, setPayWithValue] = useState("")
  const handleAPIcall = async () => {
    const result = await xcmRatesAPIcall()
    if (result.status === 200) {
      setCurrData(result.data)
    }
  }
  useEffect(() => {
    handleAPIcall()
  }, [])
  const handleCurrency = (data: CurrencyOptionsInterface) => {
    setSelectedCurrency(data)
    if (currData[data.name]) {
      setPayWithValue(currData[data.name])
    }
  }
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
            cssx={{ mb: 6, pos: "relative" }}
          >
            <Element as="p" cssx={classes.inputLabel}>
              BUY
            </Element>
            <Element
              as="input"
              required
              placeholder="0.212"
              cssx={classes.input1}
              value={currData?.XCM}
            />
            <CurrencyPicker disableDropdown hideDropdownIcon value={coinmetro} />
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            wrap="nowrap"
            direction="row"
            cssx={{ mb: 6 }}
          >
            <Element as="p" cssx={{ ml: 20, color: "white", mb: 24, fontSize: 12 }}>
              Coinmetro price {currData?.XCM}
            </Element>
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            wrap="nowrap"
            direction="row"
            cssx={{ pos: "relative" }}
          >
            <Element as="p" cssx={classes.inputLabel}>
              PAY WITH
            </Element>
            <Element
              as="input"
              required
              placeholder="100"
              cssx={classes.input1}
              value={payWithValue}
            />
            <CurrencyPicker handleOnChange={handleCurrency} value={selectedCurrency} />
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
      <Box cssx={classes.mobileTabletShow}>
        <CurrMarketCard />
      </Box>
      <Element as="img" cssx={classes.img} src="xcmbg/earthflag.png" alt="earth top flag" />
    </Box>
  )
}
