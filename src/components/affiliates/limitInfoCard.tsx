import { Box } from "@react-cssx/core"
import React from "react"

export default function LimitInfoCard() {
  return (
    <Box
      cssx={{
        w: 204,
        borderRadius: 8,
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)",
        pos: "absolute",
        top: "3rem",
        left: "4rem",
        bg: "white",
      }}
    >
      Hello
    </Box>
  )
}
