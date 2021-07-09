import { CssxObject } from "@react-cssx/core"

export interface AboutStyle {
  aboutWrapper: CssxObject
  image: CssxObject
  heading: CssxObject
  boldText: CssxObject
  slimText: CssxObject
  globe: CssxObject
  mcn: CssxObject
  contentWrapper: CssxObject
}

export const aboutStyle: AboutStyle = {
  aboutWrapper: {
    bg: "grey.light3",
    pos: "relative",
    transform: "translateY(-2px)",
    "@mq": {
      desktop: {
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
    fontSize: "1.5rem",
    fontWeight: 800,
    mt: "2.5rem",
    "@mq": {
      tablet: {
        mt: "4.5rem",
        fontSize: "2.5rem",
      },
      desktop: {
        mt: "10.875rem",
        fontSize: "3rem",
      },
    },
  },
  boldText: {
    fontSize: "1.01rem",
    fontWeight: 800,
    color: "white",
    mb: "2rem",
    letterSpacing: "0.01em",
    "@mq": {
      tablet: {},
      desktop: {},
    },
  },
  slimText: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "white",
    letterSpacing: "0.01em",
  },
  globe: {
    maxWidth: 147,
    paddingBottom: "2.5rem",
    "@mq": {
      tablet: {
        maxWidth: 211,
        paddingBottom: "0rem",
      },
      desktop: {
        maxWidth: 293,
        transform: "translateX(-64px)",
      },
    },
  },
  mcn: {
    maxWidth: 195,
    "@mq": {
      tablet: {
        maxWidth: 287,
        ml: "auto",
      },
      desktop: {
        maxWidth: 490,
        transform: "translateX(83px)",
      },
    },
  },
  contentWrapper: {
    maxWidth: "100%",
    pb: "1.5rem",
    "@mq": {
      tablet: {
        maxWidth: "21.437rem",
        mt: "2rem",
        pb: "0rem",
      },
      desktop: {
        maxWidth: "37.062rem",
        mt: "1rem",
      },
    },
  },
}
