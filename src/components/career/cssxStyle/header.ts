import { CssxObject } from "@react-cssx/core"

export interface CareerHeaderStyle {
  headerWrapper: CssxObject
  image: CssxObject
  heading: CssxObject
}

export const headerStyle: CareerHeaderStyle = {
  headerWrapper: {
    bg: "grey.dark3",
    height: "100vh",
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
    bottom: "14.875rem",
    pos: "absolute",
    left: "12.812rem",
    color: "grey.light2",
    fontSize: "3rem",
    fontWeight: 800,
  },
}
