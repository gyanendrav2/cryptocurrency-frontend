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
    top: "-0.4rem",
    left: 0,
    right: 0,
    zIndex: 2,
    objectFit: "contain",
    width: "100%",
  },
  knowBottomcurve: {
    position: "absolute",
    bottom: "-2.5rem",
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
    fontSize: "1.5rem",
    fontWeight: 800,
    mt: "2.875rem",
    mb: "2rem",
    "@mq": {
      tablet: {
        mt: "4.5rem",
        fontSize: "2.5rem",
        mb: "3rem",
      },
      desktop: {
        mt: "10.875rem",
        fontSize: "3rem",
        mb: "3rem",
      },
    },
  },
  factCard: {
    width: "18.5rem",
    height: "9.437rem",
    backgroundColor: "grey.light3",
    padding: "2.812rem 2rem",
    borderRadius: "0.575rem",
    marginBottom: "1.5rem",
    "@mq": {
      tablet: {
        width: "18.5rem",
      },
    },
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
