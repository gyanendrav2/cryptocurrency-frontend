import React, { ReactElement, useEffect, useState } from "react"
import { Box } from "@react-cssx/core"
import { Navbar } from "../Navbar"
import { InitialData, Menu } from "../../interfaces/initial"

interface HeaderProps {
  data: InitialData
}

export function Header({ data }: HeaderProps): ReactElement {
  const [NavOptions, setNavOptions] = useState({ menu: [] })
  useEffect(() => {
    if (data) {
      const menus: Menu[] = []
      data.menu.forEach((item: Menu) => {
        if (["Markets", "Exchange"].includes(item.title)) {
          menus.push(item)
        }
      })
      setNavOptions({ menu: menus })
    }
  }, [data])

  return (
    <Box
      cssx={{
        bg: "grey.dark",
        px: 44.4,
        py: 40,
        height: "100vh",
        backgroundImage: "url(xcmbg/starsbg.svg)",
      }}
    >
      <Navbar data={NavOptions} />
    </Box>
  )
}
