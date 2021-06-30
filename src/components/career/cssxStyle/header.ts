import { CssxObject } from "@react-cssx/core"

export interface CareerHeaderStyle {
  headerWrapper: CssxObject
  image: CssxObject
  heading: CssxObject
}

export const headerStyle: CareerHeaderStyle = {
  headerWrapper: {
    bg: "grey.dark3",
    height: "105vh",
    pos: "relative",
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
    display: "none",
    "@mq": {
      tablet: {
        display: "flex",
        top: "65%",
        pos: "absolute",
        left: "16%",
        color: "grey.light2",
        fontSize: "3rem",
        fontWeight: 800,
      },
    },
  },
}
