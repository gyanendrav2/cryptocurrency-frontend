import { CssxObject } from "@react-cssx/core"

export interface HowXcmStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  globeImg: CssxObject
  title: CssxObject
  wrapper2: CssxObject
}

export const howXcmStyle: HowXcmStyleInterface = {
  wrapper: {
    pos: "relative",
    overflow: "hidden",
    backgroundImage: "url(xcmbg/starsbg.svg)",
    marginTop: "-2rem",
    zIndex: "2",
    "&::before": {
      content: "''",
      background: "url('xcmbg/union.png')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "-2",
      overflowX: "hidden",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      // backgroundColor:"grey.bg"
      // backgroundPosition: "100% 100%",
      // transform: "scale(2)",
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
      // overflowX: "hidden",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "100% 100%",
    },
  },
  heading: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "4rem",
    textAlign: "center",
    color: "indigo.light",
    paddingTop: "8.5rem",
    marginBottom: "3.5rem",
    marginTop: "2rem",
  },
  img: {
    margin: "auto",
    zIndex: 0,
    position: "relative",
  },
  globeImg: {
    position: "absolute",
    bottom: "31rem",
    right: "20rem",
    // transform:"translate(31rem,20rem)",
    zIndex: "-1",
    width: 243,
    height: 137,
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
