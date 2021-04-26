import { CssxObject } from "@react-cssx/core"

interface WhyXcmStyleInterface {
  wrapper: CssxObject
  leftWrapper: CssxObject
  rightWrapper: CssxObject
  h2: CssxObject
  P: CssxObject
  horseBig: CssxObject
  horseSmall: CssxObject
  flexBox: CssxObject
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
      backgroundSize: "contain",
      // transform: "scale(2)",
      "@mq": {
        xsm: {
          background: "url('xcmbg/whybgMob.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          top: "40%",
        },
        desktop: {
          background: "url('xcmbg/whyxcmbg.svg')",
          backgroundRepeat: "no-repeat",
          top: "0",
          backgroundSize: "cover",
        },
      },
    },
  },
  leftWrapper: {
    position: "relative",
  },
  rightWrapper: {},
  horseBig: {
    position: "absolute",
    left: "-12rem",
    zIndex: "-2",
    "@mq": {
      xsm: {
        left: "-1rem",
      },
      desktop: {
        left: "-12rem",
      },
    },
  },
  horseSmall: {
    mt: "10rem",
    transform: "translate(47px,20px)",
    width: "26.875rem",
    height: "20.312rem",
    "@mq": {
      xsm: {
        mt: "4rem",
      },
      desktop: {
        mt: "10rem!important",
      },
    },
  },
  h2: {
    fontWeight: 800,
    fontSize: "2rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom: "1rem",
    textAlign:"center",
    "@mq": {
      tablet: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    textAlign:"left",
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    fontFamily: "Mulish",
    fontStyle: "normal",
  },
  flexBox: {
    "@mq": {
      xsm: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column-reverse",
      },
      desktop: {
        display: "grid!important",
      },
    },
  },
}
