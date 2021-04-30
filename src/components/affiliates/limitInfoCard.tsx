import { Box, Element } from "@react-cssx/core"
import React from "react"

export default function LimitInfoCard({
  hide,
  top,
  left,
}: {
  hide: () => void
  top?: string
  left?: string
}) {
  return (
    <Box
      cssx={{
        w: 204,
        borderRadius: 8,
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)",
        pos: "absolute",
        top,
        left,
        bg: "white",
        p: 16,
        zIndex: 4,
      }}
    >
      <Box
        cssx={{ pos: "fixed", top: 0, left: 0, right: 0, bottom: 0, w: "100%", height: "100vh" }}
        onClick={hide}
      />
      <Element as="p" cssx={{ fontSize: 8, lineHeight: "18px", fontWeight: 700 }}>
        Limits include such things like:
      </Element>
      <Element as="p" cssx={{ fontSize: 8, lineHeight: "18px", fontWeight: 400 }}>
        <ol>
          <li>1. Cookie store for X timeframe</li>
          <li>2. X length earning period</li>
          <li>3. Max earnings</li>
        </ol>
      </Element>
      <Element
        as="p"
        cssx={{
          fontSize: 8,
          lineHeight: "18px",
          fontWeight: 400,
          color: "purple.default",
          pt: 8,
          mt: 8,
          borderTop: "1px solid",
          borderColor: "grey.light",
        }}
      >
        * Coinmetro is limitless:
      </Element>
      <Element as="p" cssx={{ fontSize: 8, lineHeight: "18px", fontWeight: 400 }}>
        <ol>
          <li>1. Cookie last 30 day</li>
          <li>2. Referrals are there for lifetime</li>
          <li>3. No max earnings</li>
        </ol>
      </Element>
    </Box>
  )
}

LimitInfoCard.defaultProps = {
  top: "1.5rem",
  left: "3rem",
}
