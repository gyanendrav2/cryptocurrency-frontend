import React, { ReactElement } from "react"
import { Image as Img } from "@prismx/react-image"
import { Element } from "@react-cssx/core"

type Props = {
  src?: string | { src: string; placeholder?: string }
  sizes?: number | "auto"
  placeholder?: string | null
  loading?: "lazy" | "auto" | "eager"
  aspectRatio?: number
  height?: string | number
  critical?: boolean
  className?: string
  imgStyle?: object
  imgClass?: string
  placeholderStyle?: object
  placeholderClass?: string
  sizerStyle?: object
  sizerClass?: string
  bgColor?: string
  alt?: string
  fit?: "cover" | "contain"
  position?: string
  transparent?: boolean
  noProcessing?: boolean
  node: any
  [prop: string]: any
}

const fromEntries = (arr): any => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })))

export function PrismicImage(props: Props): ReactElement {
  const sizes = Object.keys(props.node).reduce((obj, k) =>
    (! ["dimensions", "alt", "copyright", "url"].includes(k)
      ? ({ ...obj, ...{ [k]: props.node[k] } })
      : obj),
  {})

  const allSizes = {
    ...{
      original: {
        dimensions: props.node.dimensions,
        alt: props.node.alt,
        copyright: props.node.copyright,
        url: props.node.url,
      },
    },
    ...sizes,
  }

  const srcSet: any = fromEntries(
    Object.values(allSizes).map((item) => [item.dimensions.width, item.url]),
  )

  // const placeholder = props.placeholder === null ? undefined : props.placeholder || fullSrc('32')

  return (
    <Element
      as={Img}
      {...props}
      // @ts-ignore
      aspectRatio={props.aspectRatio || props.node.dimensions.width / props.node.dimensions.height}
      src={props.node.url}
      srcSet={srcSet}
      alt={props.alt || props.node.alt}
      // webpSrcSet={webpSrcSet}
    />
  )
}
