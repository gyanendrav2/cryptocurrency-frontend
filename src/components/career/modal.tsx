import React from "react"
import { Flex, Box } from "@react-cssx/core"

interface Props {
  children: React.ReactElement
}

function Modal({ children }: Props): React.ReactElement {
  return (
    <Flex
      align="center"
      justify="center"
      cssx={{
        height: "100vh",
        pos: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        overflow: "auto",
        p: "11rem",
        pt: "15rem",
        pb: "1rem",
      }}
    >
      <Box cssx={{ maxWidth: "37.5rem" }}>{children}</Box>
    </Flex>
  )
}

export default Modal
