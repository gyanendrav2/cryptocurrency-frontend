import React, { ReactElement, useEffect, useState } from "react"
import { Box, Element, Grid } from "@react-cssx/core"
import { Navbar } from "../Navbar"
import { InitialData, Menu } from "../../interfaces/initial"
import { Container } from "../../ui/Container"
import { headerStyle } from "./cssxStyle/header"
import { CurrMarketCard } from "./currMarketCard"
import { BuyCurrencyCard } from "./buyCurrencyCard"

interface HeaderProps {
  data: InitialData
}

export function Header({ data }: HeaderProps): ReactElement {
  const classes = headerStyle
  const [NavOptions, setNavOptions] = useState<undefined | InitialData>()

  useEffect(() => {
    if (data) {
      const tempData = { ...data }
      const menus: Menu[] = []
      data.menu.forEach((item: Menu) => {
        if (["Markets", "Exchange"].includes(item.title)) {
          menus.push(item)
        }
      })
      tempData.menu = menus
      setNavOptions(tempData)
    }
  }, [data])

  return (
    <>
      <Box cssx={classes.wrapper}>
        {NavOptions && <Navbar data={NavOptions} />}
        <Container cssx={{ mt: 164 }}>
          <Grid columns={{ _: 1, desktop: 2 }} columnGap={112}>
            <Box>
              <Element as="h1" cssx={classes.h1}>
                <Element as="span" cssx={{ color: "indigo.light" }}>
                  XCM
                </Element>
                , the token of the future
              </Element>
              <Element as="p" cssx={classes.bigP}>
                XCM is the native utility token that powers the CoinMetro ecosystem.
              </Element>
              <CurrMarketCard />
            </Box>
            <BuyCurrencyCard />
          </Grid>
        </Container>
      </Box>
    </>
  )
}
