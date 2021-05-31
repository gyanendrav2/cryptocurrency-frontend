import { Element, Flex } from "@react-cssx/core"
import React, { useEffect, useState } from "react"
import { ArrowdownIcon } from "../icons/arrowdownIcon"
import { InfoIcon } from "../icons/infoIcon"
import { headerStyle } from "./cssxStyle/header"
import { priceVariationAPIcall, marketCapXCMAPIcall } from "../../API/xcmAPI"

export function CurrMarketCard({ isEuroCurrency }: { isEuroCurrency: boolean }) {
  const [marketCapData, setMarketCapData] = useState({ EUR: "", USD: "" })
  const [currentmarketCap, setCurrentmarketCap] = useState<any>("")
  const [pricevariation, setPricevariation] = useState<any>("")

  const handleAPIcall = async () => {
    const priceVarResult = await priceVariationAPIcall()
    const marketCapResult = await marketCapXCMAPIcall()
    if (priceVarResult.status === 200) {
      setPricevariation(Number(priceVarResult.data["24hInfo"][0].delta * 100).toFixed(2))
    }
    if (marketCapResult.status === 200) {
      setCurrentmarketCap(`€${marketCapResult.data.EUR}`)
      setMarketCapData(marketCapResult.data)
    }
  }

  useEffect(() => {
    handleAPIcall()
  }, [])

  useEffect(() => {
    if (isEuroCurrency) {
      setCurrentmarketCap(`€${marketCapData.EUR}`)
    } else {
      setCurrentmarketCap(`$${marketCapData.USD}`)
    }
  }, [isEuroCurrency, marketCapData])


  const classes = headerStyle
  return (
    <Flex align="center" justify="space-between" wrap="nowrap" cssx={classes.cardWrapper}>
      <Flex
        align="center"
        justify="space-between"
        wrap="nowrap"
        direction={{ base: "column", tablet: "row" }}
        cssx={{
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
          {currentmarketCap}
        </Element>
      </Flex>

      <Flex align="center" justify="space-between" wrap="nowrap" cssx={{ color: "red" }}>
        <ArrowdownIcon />
        <Element as="p" cssx={{ ml: 6.23 }}>
          {pricevariation}
        </Element>
      </Flex>
    </Flex>
  )
}
