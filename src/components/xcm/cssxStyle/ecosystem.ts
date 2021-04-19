import { CssxObject } from "@react-cssx/core"

export interface EcosystemStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  title: CssxObject
  wrapper2: CssxObject
}

export const ecoSsyemStyle: EcosystemStyleInterface = {
  wrapper: {
    pos: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      background: "url('xcmbg/xcmEcobg.svg')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "-1",
      overflowX: "hidden",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      //   transform: "scale(2)",
    },
  },
  wrapper2: {
    pos: "relative",
    overflow: "hidden",
    height: "5rem",
    marginTop: "-5px",
    bg: "grey.bg",
    "&::before": {
      content: "''",
      background: "url('xcmbg/xcmEcobg.svg')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      overflowX: "hidden",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "100% 100%",
    },
  },
  heading: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: "56px",
    color: "white",
    maxWidth: 680,
    textAlign: "center",
    margin: "auto",
    marginTop: "17rem",
    "& span": {
      color: "indigo.light",
    },
  },
  img: {
    margin: "auto",
  },
  title: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    textAlign: "center",
    margin: "auto",
    maxWidth: 502,
    color: "white",
    marginTop: "2rem",
  },
}
