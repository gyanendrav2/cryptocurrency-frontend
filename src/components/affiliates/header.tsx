import React, { ReactElement, useEffect, useState } from "react"
import { Box, Element, Grid } from "@react-cssx/core"
import { Navbar } from "../Navbar"
import { InitialData, Menu } from "../../interfaces/initial"
import { Container } from "../../ui/Container"
import { affiliatesHeaderStyle } from "./cssxStyle/headerStyle"
import { Button } from "../../ui/Button"

interface HeaderProps {
  data: InitialData
}

export function Header({ data }: HeaderProps): ReactElement {
  const classes = affiliatesHeaderStyle
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
        <Box cssx={classes.bgimage} />
        {NavOptions && <Navbar data={NavOptions} />}
        <Container cssx={classes.container}>
          <Grid columns={{ _: 1, desktop: 2 }} columnGap={112}>
            <Box>
              <Element as="h1" cssx={classes.h1}>
                Refer friends, earn crypto
              </Element>
              <Element as="p" cssx={classes.bigP}>
                Earn crypto - up to 50% uncapped commission.
              </Element>
              <Button variant="yellow" cssx={classes.btn}>
                start now
              </Button>
            </Box>
          </Grid>
        </Container>
        {/* <Element as="img" src="affiliates/headerBgMob.png" cssx={classes.mobImg} alt="bg" />
        <Element as="img" src="affiliates/headerBgTab.png" cssx={classes.TabImg} alt="bg" />
        <Element as="img" src="affiliates/affiliatesHeaderbg.png" cssx={classes.img} alt="bg" /> */}
      </Box>
    </>
  )
}
