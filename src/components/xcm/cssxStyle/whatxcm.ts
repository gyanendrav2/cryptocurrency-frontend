import { CssxObject } from "@react-cssx/core"

interface WhatXcmStyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
}

export const whatXcmStyle: WhatXcmStyleInterface = {
  wrapper: {
    zIndex: "-2",
    pos: "relative",
    overflow: "hidden",
    "&::before": {
      content: "''",
      background: "url('xcmbg/curvebg.svg')",
      position: "absolute",
      right: 0,
      top: "-41%",
      width: "100%",
      height: "100%",
      zIndex: "-1",
      overflowX: "hidden",
      backgroundPosition: "100% 100%",
      backgroundRepeat: "no-repeat",
      // transform: "scale(2)",
      "@mq": {
        xsm: {
          background: "url('xcmbg/curvebgMobile.svg')",
          top: "-70%",
          backgroundSize: "100% 100%",
        },
        phablet: {
          background: "url('xcmbg/curvebgTablet.svg')",
          backgroundSize: "100% 100%",
          top: "-71%",
        },
        tablet: {
          background: "url('xcmbg/curvebg.svg')",
          right: 0,
          top: "-67%",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          overflowX: "hidden",
          backgroundPosition: "100% 100%",
        },
        desktop: {
          top: "-50%",
          backgroundRepeat: "no-repeat",
        },
      },
    },
  },
  h6: {
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    color: "purple.default",
    marginTop: "2.5rem",
    marginBottom: "2rem",
    // textAlign:"left"
  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom: "3.5rem",
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}
