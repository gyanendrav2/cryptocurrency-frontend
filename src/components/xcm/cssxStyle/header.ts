import { CssxObject } from "@react-cssx/core"

interface HeaderStyleInterface {
  wrapper: CssxObject
  h1: CssxObject
  bigP: CssxObject
  P: CssxObject
}

export const headerStyle: HeaderStyleInterface = {
  wrapper: {
    // bg: "grey.dark",
    px: 44.4,
    py: 40,
    backgroundImage: "url(xcmbg/starsbg.svg)",
    pos: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      background: "url('xcmbg/curvebg.svg')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "-1",
      transform: "scale(1.4)",
      overflowX: "hidden",
    },
  },
  h1: { color: "white", fontSize: 62, fontWeight: 800, lineHeight: "72px" },
  bigP: {
    fontSize: 20,
    lineHeight: "32px",
    color: "white",
    fontWeight: 600,
    fontFamily: "Mulish",
    mt: 24,
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}