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
      top: "14%",
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
          top: "25%",
        },
        tablet: {
          background: "url('xcmbg/whybgTab.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          // top: "20%",
        },
        desktop: {
          background: "url('xcmbg/whyxcmbg.svg')",
          backgroundRepeat: "no-repeat",
          top: "1rem",
          backgroundPosition: "100% 100%",
        },
      },
    },
  },
  leftWrapper: {
    position: "relative",
    mt: "-7rem",
    "@mq": {
      tablet: {
        mt: "unset",
      },
    },
  },
  rightWrapper: {},
  horseBig: {
    position: "absolute",
    zIndex: "-1",
    objectFit: "contain",
    "@mq": {
      xsm: {
        left: "-1rem",
        top: "6rem",
      },
      tablet: {
        left: "-6rem",
      },
      desktop: {
        left: "-11rem",
        top: "5rem",
      },
    },
  },
  horseSmall: {
    mt: "10rem",
    transform: "translate(35%, 20px)",
    w: 206,
    zIndex: 1,
    height: "20.312rem",
    objectFit: "contain",
    "@mq": {
      xsm: {
        mt: "4rem",
      },
      tablet: {
        w: 318,
        top: "4rem",
        left: "-5rem",
      },
      desktop: {
        mt: "13rem!important",
        transform: "translate(18%, 0)",
        top: 0,
        w: 430,
      },
    },
  },
  h2: {
    fontWeight: 800,
    fontSize: "2rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom: "1rem",
    textAlign: "center",
    m: "auto",
    mt: "3.5rem",
    "@mq": {
      tablet: {
        fontSize: "3rem",
        marginBottom: "1.5rem",
        textAlign: "left",
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    fontFamily: "Mulish",
    fontStyle: "normal",
    textAlign: "center",
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
