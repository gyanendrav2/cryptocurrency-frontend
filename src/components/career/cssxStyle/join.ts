import { CssxObject } from "@react-cssx/core"

export interface JoinStyle {
  joinWrapper: CssxObject
  heading: CssxObject
  image: CssxObject
  joinBottomcurve: CssxObject
}

export const joinStyle: JoinStyle = {
  joinWrapper: {
    bg: "grey.dark3",
    pos: "relative",
    transform: "translateY(-2px)",
    "&::before": {
      content: "''",
      background: "url('career/join_stars.svg')",
      width: "100%",
      height: "100%",
      top: "20%",
      left: 0,
      right: 0,
      position: "absolute",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
      backgroundPosition: "bottom",
      backgroundSize: "100%",
    },
  },
  heading: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: 800,
    mt: "12.187rem",
    mb: "6rem",
    letterSpacing: "0.01em",
    zIndex: 1,
  },
  image: {
    position: "absolute",
    left: "3%",
    right: 0,
    top: "7%",
    zIndex: 0,
    objectFit: "contain",
  },
  joinBottomcurve: {
    position: "absolute",
    bottom: "2rem",
    left: 0,
    right: 0,
    zIndex: 0,
    objectFit: "contain",
    width: "100%",
  },
}
