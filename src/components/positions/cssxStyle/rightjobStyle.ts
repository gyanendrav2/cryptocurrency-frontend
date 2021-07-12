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
    mt: "-2px",
    "&::before": {
      content: "''",
      background: "url('career/join_stars.svg')",
      width: "100%",
      height: "100%",
      left: 0,
      right: 0,
      position: "absolute",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
      backgroundPosition: "bottom",
      top: "-4%",
      backgroundSize: "cover",
      "@mq": {
        tablet: {
          top: "20%",
          backgroundSize: "100%",
        },
      },
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
    fontSize: "1.5rem",
    fontWeight: 800,
    mt: "3rem",
    mb: "4.5rem",
    letterSpacing: "0.01em",
    zIndex: 1,
    textAlign: "center",
    maxWidth: 229,
    "@mq": {
      tablet: {
        mt: "4rem",
        mb: "3rem",
        maxWidth: "unset",
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
