import React, { ReactElement } from "react"
import { Element } from "@react-cssx/core"
import { RichText } from "prismic-reactjs"

export interface ITypographyProps {
  children?: any
  richText?: boolean
  [k: string]: any
}

export function H2({ children, richText, ...props }: ITypographyProps): ReactElement {
  return (
    <Element
      as={richText ? "div" : "h2"}
      __cssx={{
        fontSize: { _: 42, tablet: 52, desktop: 62 },
        fontWeight: 800,
        lineHeight: { _: "54px", tablet: "64px", desktop: "72px" },
        color: "purple.default",
      }}
      {...props}
    >
      {richText ? <RichText render={children} /> : children}
    </Element>
  )
}

export function H3({ children, richText, ...props }: ITypographyProps): ReactElement {
  return (
    <Element
      as={richText ? "div" : "h3"}
      __cssx={{
        fontSize: 30,
        fontWeight: 800,
        lineHeight: "42px",
        color: "purple.default",
      }}
      {...props}
    >
      {richText ? <RichText render={children} /> : children}
    </Element>
  )
}
