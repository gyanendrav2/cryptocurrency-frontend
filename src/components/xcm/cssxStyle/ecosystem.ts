import { CssxObject } from "@react-cssx/core"

export interface EcosystemStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  imgDesk: CssxObject
  imgTab: CssxObject
  imgMob: CssxObject
  title: CssxObject
  wrapper2: CssxObject
}

export const ecoSyemStyle: EcosystemStyleInterface = {
  wrapper: {
    pos: "relative",
    overflow: "hidden",
    backgroundColor: "grey.dark",
    backgroundImage: "url(xcmbg/starsbg.svg)",
    "@mq": {
      tablet: {
        pb: "10rem",
      },
      desktop: {
        pb: "2rem",
      },
    },
  },
  wrapper2: {
    pos: "relative",
    overflow: "hidden",
    height: "5rem",
    marginTop: "-5px",
    bg: "grey.bg",
    zIndex: "-1",
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
      backgroundPosition: "bottom",
    },
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 800,
    lineHeight: "2.5rem",
    color: "white",
    textAlign: "center",
    mt: "4rem",
    mb: "2rem",
    px: "1.5rem",
    maxWidth: 680,
    "& span": {
      color: "indigo.light",
    },
    "@mq": {
      tablet: {
        fontSize: "3rem",
        lineHeight: "56px",
      },
      desktop: {
        mx: "auto",
      },
    },
  },
  imgDesk: {
    margin: "auto",
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
      },
    },
  },
  imgTab: {
    display: "none",
    margin: "auto",
    "@mq": {
      tablet: {
        display: "block",
        marginBottom: "-8rem",
      },
      desktop: {
        display: "none",
      },
    },
  },
  imgMob: {
    display: "block",
    margin: "auto",
    padding: 40,
    "@mq": {
      xsm: {
        display: "block",
      },
      tablet: {
        display: "none",
      },
      desktop: {
        display: "none",
      },
    },
  },
  title: {
    fontSize: 20,
    lineHeight: "2rem",
    fontWeight: 600,
    textAlign: "center",
    px: 24,
    margin: "auto",
    maxWidth: 502,
    color: "white",
    marginTop: "2rem",
  },
}
