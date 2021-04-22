import { CssxObject } from "@react-cssx/core"

interface WhatXcmStyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
  coinIcon: CssxObject
  container: CssxObject
  limitedContainer: CssxObject
}

export const whatXcmStyle: WhatXcmStyleInterface = {
  wrapper: {
    zIndex: "-2",
    pos: "relative",
    overflow: "hidden",
    mt: "-1",
    // "&::before": {
    //   content: "''",
    //   background: "url('xcmbg/curvebg.svg')",
    //   position: "absolute",
    //   right: 0,
    //   top: "-41%",
    //   width: "100%",
    //   height: "100%",
    //   zIndex: "-1",
    //   overflowX: "hidden",
    //   backgroundPosition: "100% 100%",
    //   backgroundRepeat: "no-repeat",
    //   // transform: "scale(2)",
    //   "@mq": {
    //     xsm: {
    //       background: "url('xcmbg/curvebgMobile.svg')",
    //       top: "-70%",
    //       backgroundSize: "100% 100%",
    //     },
    //     phablet: {
    //       background: "url('xcmbg/curvebgTablet.svg')",
    //       backgroundSize: "100% 100%",
    //       top: "-71%",
    //     },
    //     tablet: {
    //       background: "url('xcmbg/curvebg.svg')",
    //       right: 0,
    //       top: "-67%",
    //       width: "100%",
    //       height: "100%",
    //       zIndex: "-1",
    //       overflowX: "hidden",
    //       backgroundPosition: "100% 100%",
    //     },
    //     desktop: {
    //       top: "-50%",
    //       backgroundRepeat: "no-repeat",
    //     },
    //   },
    // },
    "@mq": {
      xsm: {
        pb: "5rem",
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
    "@mq": {
      xsm: {
        fontSize: 24,
        lineHeight: "32px",
        textAlign: "center",
        ml: "auto",
        mr: "auto",
        mb: 24,
      },
    },
  },
  h2: {
    fontWeight: 800,
    color: "purple.default",
    marginBottom: "3.5rem",
    "@mq": {
      xsm: {
        fontSize: 40,
        lineHeight: "54px",
        mt: "2rem",
        textAlign: "center",
        mx: "auto",
      },
      tablet: {
        fontSize: 48,
        lineHeight: "56px",
      },
      desktop: {
        textAlign: "left",
        mx: "unset",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    "@mq": {
      xsm: {
        mx: "auto",
        textAlign: "center",
      },
    },
  },
  coinIcon: {
    "@mq": {
      xsm: {
        mx: "auto",
      },
      desktop: {
        mx: "unset",
      },
    },
  },
  container: {
    "@mq": {
      xsm: {
        p: 0,
      },
    },
  },
  limitedContainer: {
    p: 24,
    backgroundColor: "transparent",
    // mt: { _: 0, desktop: 88 },
    zIndex: 2,
    "@mq": {
      xsm: {
        padding: "1rem",
        paddingTop: 43,
      },
      tablet: {
        paddingTop: 69,
      },
      desktop: {
        paddingTop: 433,
      },
    },
  },
}
