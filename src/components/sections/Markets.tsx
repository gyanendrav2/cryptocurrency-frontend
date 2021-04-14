import React, { ReactElement, useEffect, useState } from "react"
import axios from "axios"
import {
  Box, Flex, Grid,
} from "@react-cssx/core"
import dynamic from "next/dynamic"
import { useInterval } from "../../lib/useInterval"
// import { Rechart } from "../Rechart"
import { Container } from "../../ui/Container"
import { Button } from "../../ui/Button"
import { H2 } from "../../ui/Typography"
import { Text } from "../../ui/Text"

const Rechart = dynamic<{ pair: string }>(import("../Rechart").then((mod) => mod.Rechart), { loading: () => <div />, ssr: false })

const defaultMarkets = [
  { name: "Bitcoin", url: "https://go.coinmetro.com/exchange/eur-to-BTC" },
  { name: "Ethereum", url: "https://go.coinmetro.com/exchange/eur-to-eth" },
  { name: "Ripple", url: "https://go.coinmetro.com/exchange/eur-to-xrp" },
  { name: "Chainlink", url: "https://go.coinmetro.com/exchange/eur-to-link" },
  { name: "CoinMetro", url: "https://go.coinmetro.com/exchange/eur-to-xcm" },
]

const marketMapping = {
  CoinMetro: "XCMEUR",
  Bitcoin: "BTCEUR",
  Litecoin: "LTCEUR",
  Ethereum: "ETHEUR",
  "Bitcoin Cash": "BCHEUR",
  Ripple: "XRPEUR",
  Lumen: "XLMEUR",
  OmiseGo: "OMGEUR",
  EnjinCoin: "ENJEUR",
  "Basic Attention Token": "BATEUR",
  Quant: "QNTEUR",
  Parsiq: "PRQEUR",
  Tezos: "XTZEUR",
  Kadena: "KDAEUR",
  Chainlink: "LINKEUR",
  "USD Coin": "USDCEUR",
}

export interface IMarketsProps {
  data: any
}

export function Markets({ data }: IMarketsProps): ReactElement {
  const [markets, setMarkets] = useState<any>({})
  const marketsToShow: any = data.market_use_custom_currencies
    ? Object.values(data.market_currencies)
    : defaultMarkets

  const isTablet = typeof window !== "undefined" && window.innerWidth >= 768

  const updateData = () => {
    axios.get("https://api.coinmetro.com/exchange/prices/")
      .then((res) => setMarkets(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    updateData()
  }, [])

  useInterval(() => {
    updateData()
  }, 14400000)

  const filtered = marketsToShow.reduce((acc, market) => {
    const findLatest = markets?.latestPrices?.find((item) => item.pair === marketMapping[market.name])
    const find24 = markets["24hInfo"]?.find((item: any) => item.pair === marketMapping[market.name])
    const main = {
      pair: marketMapping[market.name],
      name: market.name,
      symbol: marketMapping[market.name].slice(0, - 3),
      latest: findLatest,
      daily: find24,
      url: market.url,
    }

    return acc.concat(main)
  }, [])

  const templateCols = `
                    60px
                    minmax(200px, 250px)
                    minmax(80px, 160px)
                    minmax(100px, 200px)
                    minmax(150px, 1fr)
                    minmax(100px, 150px)
                  `

  return (
    <Box cssx={{ pos: "relative", pb: 150, zIndex: 10 }}>

      <Container cssx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mt: 80,
        mb: 50,
      }}
      >
        <H2 cssx={{ mb: 20 }}>{data.market_title}</H2>
        <Text richText cssx={{ mx: "auto", maxWidth: { desktop: 2 / 3 } }}>{data.market_content}</Text>
      </Container>

      <Container
        cssx={{
          display: {
            _: "none",
            tablet: "block",
          },
          maxWidth: { tablet: 768, desktop: 1080 },
          px: { tablet: 0, desktop: 20 },
        }}
      >
        <Grid
          cssx={{
            mb: 10,
            px: 20,
            color: "purple.default",
            fontSize: 12,
            fontWeight: "bold",
            alignItems: "center",
            gridTemplateColumns: templateCols,
          }}
        >
          <Box />
          <Box />
          <Box>24H</Box>
          <Box cssx={{ textTransform: "uppercase" }}>{data.string_price}</Box>
          <Box cssx={{ textTransform: "uppercase" }}>{data.string_price_chart}</Box>
        </Grid>
        {filtered && filtered.map((entry) => (
          <a href={entry.url} key={entry.symbol}>
            {entry.latest && entry.daily && (

            <Grid
              cssx={{
                bg: "grey.bg",
                borderRadius: "lg",
                mb: 10,
                px: 20,
                alignItems: "center",
                gridTemplateColumns: templateCols,
              }}
            >
              <Box cssx={{ py: 10 }}>
                <img src={`https://go.coinmetro.com/assets/img/assets/${entry.symbol}.svg`} alt={entry.name} width={40} height={40} />
              </Box>
              <Box cssx={{
                color: "purple.default",
                fontWeight: "bold",
              }}
              >
                {entry.name} ({entry.symbol})
              </Box>

              <Box cssx={{ pr: 16, mr: "auto", color: entry.daily.delta > 0 ? "green" : "red" }}>
                {Number(entry.daily.delta * 100).toFixed(2)}%
              </Box>

              <Box cssx={{ color: "purple.default" }}>
                € {Number(entry.latest.price).toFixed(5)}
              </Box>

              <Box cssx={{ w: "full", h: "full" }}>
                {isTablet && <Rechart pair={entry?.pair} />}
              </Box>
              <Box cssx={{ py: 10, ml: "auto" }}>
                <Button as="a" href={entry.url} variant="yellow" cssx={{ px: 12, py: 8 }}>
                  {data.string_buy_now}
                </Button>
              </Box>
            </Grid>
            )}
          </a>
        ))}
      </Container>

      <Box cssx={{ display: { tablet: "none" } }}>
        {filtered && filtered.map((entry) => (
          <div key={`${entry.symbol}-mobile`}>
            {entry.latest && entry.daily && (
              <Box cssx={{ bg: "grey.bg", mb: 10 }}>
                <Container>
                  <Flex>
                    <Box cssx={{ py: 15, w: 60 }}>
                      <img src={`https://go.coinmetro.com/assets/img/assets/${entry.symbol}.svg`} alt={entry.name} width={40} height={40} />
                    </Box>
                    <Flex wrap="wrap" cssx={{ flex: 1, py: 24, color: "purple.default" }} align="center">
                      <Box cssx={{ fontWeight: "bold" }}>
                        <Box>{entry.name}</Box>
                        <Box cssx={{ color: "grey.light", mt: 8 }}>{entry.symbol}</Box>
                      </Box>
                      <Flex direction="column" cssx={{ ml: "auto" }}>
                        <Box cssx={{ ml: "auto" }}>€ {Number(entry.latest.price).toFixed(5)}</Box>
                        <Box cssx={{ color: entry.daily.delta > 0 ? "green" : "red", mt: 8, ml: "auto" }}>
                          {Number(entry.daily.delta * 100).toFixed(2)}%
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Container>
              </Box>
            )}
          </div>
        ))}
      </Box>

      <Container cssx={{ mt: 40, display: "flex" }}>
        <Button as="a" href="https://go.coinmetro.com/markets" variant="outline" cssx={{ mx: "auto" }}>
          {data.string_view_all_assets}
        </Button>
      </Container>
    </Box>
  )
}
