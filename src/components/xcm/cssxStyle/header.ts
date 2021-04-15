import { CssxObject } from "@react-cssx/core"

interface HeaderStyleInterface {
  wrapper: CssxObject
  img: CssxObject
  h1: CssxObject
  bigP: CssxObject
}

export const headerStyle: HeaderStyleInterface = {
  wrapper: {
    bg: "grey.dark",
    px: 44.4,
    py: 40,
    // height: "100vh",
    backgroundImage: "url(xcmbg/starsbg.svg)",
  },
  img: {
    pos: "absolute",
    top: 250,
    right: 0,
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
}
