import React, { useEffect, useState } from "react"
import useSWR from "swr"
import { Box, Element, Flex } from "@react-cssx/core"
import { Button } from "../../ui/Button"
import { buyCurrencyCardStyle } from "./cssxStyle/buyCurrencyCard"
import { CurrencyPicker } from "../currency/currencyPicker"
import { CurrencyOptionsInterface } from "../../interfaces/currencyOptionsInterface"
import { CurrMarketCard } from "./currMarketCard"
import { fetcher } from "../../API/xcmAPI"
import { endpoints } from "../../util/endpoints"

export function BuyCurrencyCard() {
  const classes = buyCurrencyCardStyle
  const [currData, setCurrData] = useState<any>({ XCM: "", EUR: "" })
  const [xcmValue, setXcmValue] = useState<any>("")
  const [totalXcm, setTotalXcm] = useState<any>("1")
  const xcmRatesData = useSWR(endpoints.xcmRates, fetcher)

  const coinmetro = {
    name: "XCM",
    currency: "coinmetro",
    flag: "xcmFlags/input-coinmetro-logo.svg",
  }
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOptionsInterface>({
    name: "EUR",
    currency: "EURO",
    flag: "xcmFlags/europeFlag.png",
  })
  const [payWithValue, setPayWithValue] = useState<any>("")

  const handleAPIcall = () => {
    if (xcmRatesData.data) {
      setCurrData(xcmRatesData.data)
      const value = (((xcmRatesData.data as any).EUR as any) / ((xcmRatesData.data as any).EUR as any))
       * ((xcmRatesData.data as any).XCM as any)
      setXcmValue(value)
      setPayWithValue(value)
    }
  }
  useEffect(() => {
    handleAPIcall()
  }, [xcmRatesData])

  const handleCurrency = (data: CurrencyOptionsInterface) => {
    setSelectedCurrency(data)
    if (currData[data.name]) {
      const value = ((currData.EUR as any) / currData[data.name]) * (currData.XCM as any)
      setXcmValue(value)
      setPayWithValue(totalXcm * value)
    }
  }

  const handleXcmCoin = (e: any) => {
    setTotalXcm(e.target.value)
    setPayWithValue(xcmValue * e.target.value)
  }
  const handleXcmMade = (e: any) => {
    setPayWithValue(e.target.value)
    setTotalXcm(e.target.value / xcmValue)
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
              cssx={classes.input1}
              value={totalXcm}
              onChange={handleXcmCoin}
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
              Coinmetro price {xcmValue}
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
              cssx={classes.input1}
              value={payWithValue}
              onChange={handleXcmMade}
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
