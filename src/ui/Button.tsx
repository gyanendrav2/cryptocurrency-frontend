import React, { ReactElement } from "react"
import { Element, IElementProps } from "@react-cssx/core"

export interface IButtonProps extends IElementProps{
  variant: "yellow" | "outline" | "purple"
  [k: string] : any
}

export function Button({ variant, ...props }: IButtonProps): ReactElement {
  return (
    <>
      <Element as="button" __variantKey="button" variant={variant} {...props} />
    </>
  )
}
