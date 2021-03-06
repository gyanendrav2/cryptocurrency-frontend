import { CssxObject } from "@react-cssx/core"

export interface CareerHeaderStyle {
  headerWrapper: CssxObject
  image: CssxObject
  heading: CssxObject
}

export const headerStyle: CareerHeaderStyle = {
  headerWrapper: {
    backgroundImage: "url('career/career_hero.png')",
    backgroundSize: "cover",
    // backgroundPosition: "80% 80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    w: "100%",
    height: "calc(100vh - 6.5rem)",
    zIndex: "1",
    mt: "5.5rem",
    "@mq": {
      tablet: {
        mt: "6.55rem",
        backgroundPosition: "center",
      },
    },
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    objectFit: "contain",
    width: "100%",
  },
  heading: {
    // display: "block",
    color: "white",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.01em",
    top: "50%",
    pos: "absolute",
    left: "5%",
    maxWidth: "12.875rem",
    lineHeight: "3rem",
    "@mq": {
      tablet: {
        fontSize: "3rem",
        top: "55%",
        left: "5%",
      },
      desktop: {
        left: "16%",
        maxWidth: "100%",
      },
    },
  },
}
