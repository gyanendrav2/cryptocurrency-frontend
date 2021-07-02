import { CssxObject } from "@react-cssx/core"

export interface JoinStyle {
  joinWrapper: CssxObject
  heading: CssxObject
  image: CssxObject
  trustBottomcurve: CssxObject
  jointopCurve: CssxObject
}

export const joinStyle: JoinStyle = {
  joinWrapper: {
    bg: "grey.dark3",
    position: "relative",
    transform: "translateY(-2px)",
    "&::before": {
      content: "''",
      background: "url('career/join_stars.svg')",
      width: "100%",
      height: "100%",
      // top: "20%",
      // left: 0,
      // right: 0,
      position: "absolute",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
      backgroundPosition: "bottom",
      backgroundSize: "100%",
    },
    "@mq": {
      desktop: {
        backgroundPosition: "center",
      },
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
  trustBottomcurve: {
    position: "absolute",
    top: "100%",
    left: 0,
    bottom: "10rem",
    right: 0,
    zIndex: 0,
    objectFit: "contain",
    width: "100%",
  },
  jointopCurve: {
    position: "absolute",
    // bottom: "-12rem",
    top: "-95%",
    left: 0,
    right: 0,
    zIndex: 1,
    objectFit: "contain",
    width: "100%",
  },
}
