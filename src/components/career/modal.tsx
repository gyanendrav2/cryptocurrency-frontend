import React from "react"
import { Box, Flex, Element } from "@react-cssx/core"
import { modalStyle } from "./cssxStyle/modal"

interface Props {
  onClose: () => void
}

export default function Modal({ onClose }: Props): React.ReactElement {
  return (
    <Flex
      align="center"
      justify="center"
      cssx={{ height: "100vh", pos: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%" }}
    >
      <Box cssx={modalStyle.wrapper}>
        <Element as="img" src="/career/close.svg" cssx={modalStyle.closeIcon} onClick={onClose} />
        <Element as="h1" cssx={modalStyle.heading}>
          Let’s talk!
        </Element>
      </Box>
    </Flex>
  )
}
