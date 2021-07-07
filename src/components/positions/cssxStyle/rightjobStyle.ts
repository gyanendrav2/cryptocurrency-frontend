import { CssxObject } from "@react-cssx/core"

export interface RightjobStyle {
  joinWrapper: CssxObject
  heading: CssxObject
  image: CssxObject
  topCurve: CssxObject
}

export const rightjobStyle: RightjobStyle = {
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
  topCurve: {
    position: "absolute",
    top: "-14rem",
    left: 0,
    // right: 0,
    zIndex: 1,
    objectFit: "contain",
    width: "100%",
  },
  heading: {
    color: "white",
    fontSize: "2.5rem",
    fontWeight: 800,
    mt: "12.187rem",
    mb: "6rem",
    letterSpacing: "0.01em",
    zIndex: 1,
    textAlign: "center",
    "@mq": {
      tablet: {
        mt: "4rem",
        mb: "3rem",
      },
      desktop: {
        mt: "12.187rem",
      },
    },

  },
  image: {
    position: "absolute",
    right: 0,
    top: "7%",
    zIndex: 0,
    objectFit: "contain",
  },
}
