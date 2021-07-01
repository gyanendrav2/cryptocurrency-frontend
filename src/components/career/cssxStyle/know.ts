import { CssxObject } from "@react-cssx/core"

export interface CareerKnowStyle {
  careerWrapper: CssxObject
  heading: CssxObject
  factCard: CssxObject
  factText: CssxObject
  deskCityImg: CssxObject
  curve: CssxObject
  knowBottomcurve: CssxObject
}

export const careerKnowStyle: CareerKnowStyle = {
  careerWrapper: {
    bg: "#F2F3F8",
    pos: "relative",
  },
  curve: {
    position: "absolute",
    top: "-0.7rem",
    left: 0,
    right: 0,
    zIndex: 2,
    objectFit: "contain",
    width: "100%",
  },
  knowBottomcurve: {
    position: "absolute",
    bottom: "-3rem",
    left: 0,
    right: 0,
    zIndex: 0,
    objectFit: "contain",
    width: "100%",
    "@mq": {
      tablet: {
        bottom: "-5rem",
      },
      desktop: {
        bottom: "-10rem",
      },
    },
  },
  heading: {
    color: "grey.dark3",
    fontSize: "3rem",
    fontWeight: 800,
    mt: "10.875rem",
    mb: "5.5rem",
  },
  factCard: {
    width: "20.5rem",
    height: "9.437rem",
    backgroundColor: "grey.light3",
    padding: "2.812rem 2rem",
    borderRadius: "0.575rem",
    marginBottom: "1.5rem",
  },
  factText: {
    fontWeight: 800,
    fontSize: "1.25rem",
    color: "white",
  },
  deskCityImg: {
    marginLeft: "auto",
  },
}
