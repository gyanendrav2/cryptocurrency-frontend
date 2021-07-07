import { CssxObject } from "@react-cssx/core"

export interface TrustStyle {
  trustWrapper: CssxObject
  trustBottomcurve: CssxObject
  iconContainer: CssxObject
  imageContainer: CssxObject
  text: CssxObject
  icon: CssxObject
}

export const trustStyle: TrustStyle = {
  trustWrapper: {
    bg: "#F2F3F8",
    pos: "relative",
    transform: "translateY(-2px)",
    py: "5.5rem",
  },
  text: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "grey.dark3",
    mb: "1rem",
  },
  trustBottomcurve: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    objectFit: "contain",
    width: "100%",
  },
  iconContainer: {
    p: "4.25rem 0.5rem",
    borderBottom: "3px solid rgb(71, 91, 174, 0.5)",
    "@mq": {
      tablet: {
        borderRight: "3px solid rgb(71, 91, 174, 0.5)",
        borderBottom: "none",
        p: "4.25rem 2.5rem",
      },
      desktop: {
        maxWidth: 650,
      },
    },
  },
  icon: {
    marginRight: "1rem",
    height: "30px",
    width: "30px",
  },
  // icon:nth-of-type(1): {
  //   marginRight: "0",
  // },
  imageContainer: {
    p: "4.25rem 2.5rem",
  },
}
