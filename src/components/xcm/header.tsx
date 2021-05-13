import React, { ReactElement, useState } from "react"
import { Box, Element, Grid } from "@react-cssx/core"
import { useIntl } from "react-intl"
import { Navbar } from "../Navbar"
import { InitialData } from "../../interfaces/initial"
import { Container } from "../../ui/Container"
import { headerStyle } from "./cssxStyle/header"
import { CurrMarketCard } from "./currMarketCard"
import { BuyCurrencyCard } from "./buyCurrencyCard"

interface HeaderProps {
  data: InitialData
}

export function Header({ data }: HeaderProps): ReactElement {
  const classes = headerStyle
  const [isEuro, setIsEuro] = useState(true)
  const { formatMessage: f } = useIntl()

  return (
    <>
      <div className="header__wrapper">
        <Navbar data={data} />
        <Container cssx={classes.container}>
          <Grid columns={{ _: 1, desktop: 2 }} columnGap={112}>
            <Box>
              <Element as="h1" cssx={classes.h1}>
                <Element as="span" cssx={{ color: "indigo.light" }}>
                  XCM
                </Element>
                , {f({ id: "headerHeading" })}
              </Element>
              <Element as="p" cssx={classes.bigP}>
                {f({ id: "headerSubTitle" })}
              </Element>
              <Box cssx={classes.showonlyDesktop}>
                <CurrMarketCard isEuroCurrency={isEuro} />
              </Box>
            </Box>
            <BuyCurrencyCard getCurrencyType={(value) => setIsEuro(value)} />
          </Grid>
        </Container>
      </div>
    </>
  )
}
