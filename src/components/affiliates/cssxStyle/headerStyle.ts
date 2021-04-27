import { CssxObject } from "@react-cssx/core"

export interface AffiliatesHeaderStyleInterface {
  wrapper: CssxObject
  container: CssxObject
  h1: CssxObject
  bigP: CssxObject
  img: CssxObject
  btn: CssxObject
  TabImg: CssxObject
  mobImg: CssxObject
}

const absoluteImg: CssxObject = {
  pos: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  zIndex: "-1",
}

const bgImage: CssxObject = {
  content: "''",
  background: "url('affiliates/headerCurveMob.svg')",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  backgroundPosition: "bottom",
  backgroundSize: "100%",
}

export const affiliatesHeaderStyle: AffiliatesHeaderStyleInterface = {
  wrapper: {
    pos: "relative",
    "&::before": {
      content: "''",
      ...bgImage,
      "@mq": {
        xsm: {
          ...bgImage,
          background: "url('affiliates/headerCurveMob.svg')",
        },
        tablet: {
          ...bgImage,
          background: "url('affiliates/headerCurveTab.svg')",
        },
        desktop: {
          ...bgImage,
          background: "url('affiliates/headerCurve.svg')",
        },
      },
    },
  },
  container: {
    textAlign: "center",
    "@mq": {
      desktop: {
        textAlign: "left",
      },
    },
  },
  h1: {
    fontSize: 42,
    lineHeight: "54px",
    textAlign: "center",
    fontWeight: 800,
    maxWidth: 504,
    color: "white",
    paddingTop: 102,
    "@mq": {
      xsm: {
        pt: 102,
        fontSize: 42,
        lineHeight: "54px",
        textAlign: "center",
        mx: "auto",
      },
      tablet: {
        pt: 142,
        mx: "auto",
        fontSize: 62,
        lineHeight: "72px",
      },
      desktop: {
        paddingTop: 204,
        fontSize: 62,
        fontWeight: 800,
        lineHeight: "72px",
        textAlign: "left",
      },
    },
  },
  bigP: {
    color: "white",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "32px",
    my: 24,
    "@mq": {
      xsm: {
        textAlign: "center",
      },
      tablet: {
        textAlign: "center",
      },
      desktop: {
        textAlign: "left",
      },
    },
  },
  btn: {
    mb: 300,
    "@mq": {
      xsm: {
        mb: 235,
        mx: "auto",
      },
      tablet: {
        mb: 300,
        mx: "auto",
      },
      desktop: {
        mx: "unset",
      },
    },
  },
  img: {
    ...absoluteImg,
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
      },
    },
  },
  mobImg: {
    ...absoluteImg,
    "@mq": {
      tablet: {
        display: "none",
      },
    },
  },
  TabImg: {
    ...absoluteImg,
    display: "none",
    "@mq": {
      tablet: {
        display: "block",
      },
      desktop: {
        display: "none",
      },
    },
  },
}
