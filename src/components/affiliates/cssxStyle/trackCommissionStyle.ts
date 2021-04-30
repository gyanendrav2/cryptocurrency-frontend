import { CssxObject } from "@react-cssx/core"

export interface TrackCommissionStyleInterface {
  heading: CssxObject
  paragraph: CssxObject
  imgDesk: CssxObject
  imgTab: CssxObject
  imgMob: CssxObject
}
export const trackCommissionStyle: TrackCommissionStyleInterface = {
  heading: {
    fontSize: 32,
    lineHeight: "40px",
    maxWidth: 475,
    mx: "auto",
    textAlign: "center",
    color: "indigo.light",
    fontWeight: 800,
    mb: 24,
    "@mq": {
      tablet: {
        fontSize: 48,
      },
      desktop: {
        mx: "unset",
        mr: "auto",
        textAlign: "left",
      },
    },
  },
  paragraph: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    color: "white",
    mb: 32,
    mx: "auto",
    textAlign: "center",
    "@mq": {
      desktop: {
        mx: "unset",
        mr: "auto",
        textAlign: "left",
      },
    },
  },
  imgDesk: {
    pos: "absolute",
    right: 0,
    top: "24.5rem",
    zIndex: 2,
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
        top: 120,
      },
      xxl: {},
    },
  },
  imgTab: {
    pos: "absolute",
    top: "30rem",
    zIndex: 2,
    display: "none",
    textAlign: "center",
    "@mq": {
      tablet: {
        display: "block",
      },
      desktop: {
        display: "none",
      },
    },
  },
  imgMob: {
    pos: "absolute",
    right: 0,
    left: 0,
    top: "30.5rem",
    zIndex: 2,
    textAlign: "center",
    margin: "auto",
    "@mq": {
      xsm: {
        display: "block",
      },
      // phablet: {
      //   top: "18.5rem",
      // },
      tablet: {
        display: "none",
      },
    },
  },
}
