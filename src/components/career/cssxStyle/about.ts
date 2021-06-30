import { CssxObject } from "@react-cssx/core"

export interface AboutStyle {
  aboutWrapper: CssxObject
  image: CssxObject
  heading: CssxObject
  boldText: CssxObject
  slimText: CssxObject
  globe: CssxObject
  mcn: CssxObject
}

export const aboutStyle: AboutStyle = {
  aboutWrapper: {
    bg: "grey.light3",
    pos: "relative",
    transform: "translateY(-2px)",
    "&::before": {
      content: "''",
      background: "url('career/aboutStars.svg')",
      width: "100%",
      height: "100%",
      top: -2,
      left: 0,
      right: 0,
      bottom: 0,
      position: "absolute",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
      backgroundPosition: "bottom",
      backgroundSize: "100%",
    },
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    objectFit: "contain",
    width: "100%",
  },
  heading: {
    color: "white",
    fontSize: "3rem",
    fontWeight: 800,
    mt: "10.875rem",
  },
  boldText: {
    fontSize: "1.25rem",
    fontWeight: 800,
    color: "white",
    mb: "2rem",
  },
  slimText: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "white",
  },
  globe: {
    "@mq": {
      desktop: {
        transform: "translateX(-140px)",
      },
    },
  },
  mcn: {
    "@mq": {
      desktop: {
        transform: "translateX(83px)",
      },
    },
  },
}
