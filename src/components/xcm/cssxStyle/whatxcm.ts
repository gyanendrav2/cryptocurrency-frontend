import { CssxObject } from "@react-cssx/core"

interface WhatXcmStyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
  coinIcon: CssxObject
  limitedContainer: CssxObject
  diagramIcon:CssxObject
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
      disktop: {
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
    width:"100%",
    textAlign:"center",
    mx:"auto",
    "@mq": {  
    desktop: {
    textAlign:"left",
      }
    },
  },
  h2: {
    fontWeight: 800,
    fontFamily:"Mulish",
    color: "purple.default",
    mb: "2rem",
    fontSize: 40,
    lineHeight: "54px",
    width:"100%",
    textAlign: "center",
    mx: "auto",
    "@mq": {
      tablet: {
        fontSize: 48,
        lineHeight: "56px",
      },
      desktop: {
        textAlign: "left",
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
     mx: "auto",
     textAlign: "center",
     width:"100%",
    "@mq": {
      desktop: {
     textAlign: "left",
      },
    },
  },
  coinIcon: {
    mx: "auto",
    "@mq": {
      xsm: {
        mx: "auto",
      },
      desktop: {
        mx: "unset",
      },
    },
  },
  diagramIcon:{
     mx: "auto",
     mt:"2rem",
    "@mq": {
      xsm: {
        mx: "auto",
      },
      desktop: {
        mx: "unset",
      },
    },
  },
  limitedContainer: {
     pb: 16,
     px:0,
    backgroundColor: "transparent",
    // mt: { _: 0, desktop: 88 },
    zIndex: 2,
    "@mq": {
      tablet: {
        paddingTop: 69,
      },
      desktop: {
        paddingTop: 433,
        px:24,
      },
    },
  },
}
