import { CssxObject } from "@react-cssx/core"

export interface WecareStyle {
  trustWrapper: CssxObject
  trustBottomcurve: CssxObject
  heading: CssxObject
}

export const wecareStyle: WecareStyle = {
  trustWrapper: {
    bg: "#F2F3F8",
    pos: "relative",
    transform: "translateY(-2px)",
    pt: "12.25rem",
    pb: "13.25rem",
  },
  trustBottomcurve: {
    position: "absolute",
    top: -5,
    left: 0,
    right: 0,
    zIndex: 0,
    objectFit: "contain",
    width: "100%",
  },
  heading: {
    fontWeight: 800,
    fontSize: "2.5rem",
    textAlign: "center",
    letterSpacing: "0.01em",
    color: "primary",
  },
}
