import React, { ReactElement, ReactNode } from "react"
import { Element } from "@react-cssx/core"

export interface IGlobalStylesProps {
  children: ReactNode
}

export function GlobalStyles({ children }: IGlobalStylesProps): ReactElement {
  return (
    <Element cssx={{
      fontWeight: 600,
      fontFamily: "sans",
    }}
    >
      {children}
    </Element>
  )
}
