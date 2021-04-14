import React, { ReactElement } from "react"
import { AspectRatioBox, Element } from "@react-cssx/core"

export interface IImageProps {
  ratio: number
  src: string
  alt?: string
  [k: string]: any
}

export function Image({
  ratio, src, alt = "", ...props
}: IImageProps): ReactElement {
  return (
    <AspectRatioBox ratio={ratio} {...props}>
      <Element
        as="img"
        src={src}
        alt={alt}
      />
    </AspectRatioBox>
  )
}
