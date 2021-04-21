import { CssxObject } from "@react-cssx/core"

interface WhyXcmStyleInterface {
  wrapper: CssxObject
  leftWrapper: CssxObject
  rightWrapper: CssxObject
  h2: CssxObject
  P: CssxObject
  horseBig: CssxObject
  horseSmall: CssxObject
}

export const WhyXcmStyle: WhyXcmStyleInterface = {
  wrapper: {
    zIndex: 1,
    pos: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      background: "url('xcmbg/whyxcmbg.svg')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      zIndex: "-1",
      overflowX: "hidden",
      backgroundPosition: "100% 100%",
      backgroundRepeat: "no-repeat",
      // transform: "scale(2)",
    },
  },
  leftWrapper: {
    position: "relative",
  },
  rightWrapper: {},
  horseBig: {
    position: "absolute",
    left: "-12rem",
    zIndex:-2
  },
  horseSmall: {
    // position: "absolute",
    // right: 0,
    // bottom: 0,
    mt: "10rem",
    transform: "translate(47px,20px)",
    width: "26.875rem",
    height: "20.312rem",
  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
     marginBottom: "2rem",
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    fontFamily: "Mulish",
    fontStyle: "normal",
  },
}
