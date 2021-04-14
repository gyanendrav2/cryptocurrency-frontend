import React, { ReactElement } from "react"
import { Element } from "@react-cssx/core"
import { RichText } from "prismic-reactjs"

export interface ITextProps {
  as?: any
  children: any
  richText?: boolean
  [k: string]: any
}

export function Text({
  as = "p", children, richText, ...props
}: ITextProps): ReactElement {
  return (
    <Element
      as={richText ? "div" : as}
      __cssx={{
        fontSize: 20,
        lineHeight: "32px",
      }}
      {...props}
    >
      {richText ? <RichText render={children} /> : children}
    </Element>
  )
}
