import { CssxObject } from "@react-cssx/core"

export interface StartEarningStyleInterface {
  imgDesk: CssxObject
  imgTab: CssxObject
  imgMob: CssxObject
}
export const startEarningStyle: StartEarningStyleInterface = {
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
    right: 0,
    top: 120,
    zIndex: 2,
    display: "none",
    "@mq": {
      tablet: {
        display: "block",
        top: "22.5rem",
      },
      desktop: {
        display: "none",
      },
    },
  },
  imgMob: {
    pos: "absolute",
    right: 0,
    top: "22.5rem",
    zIndex: 2,
    "@mq": {
      xsm: {
        display: "block",
      },
      phablet: {
        top: "21.5rem",
      },
      tablet: {
        display: "none",
      },
    },
  },
}
