import { CssxObject } from "@react-cssx/core"

interface HeaderStyleInterface {
  wrapper: CssxObject
  h1: CssxObject
  bigP: CssxObject
  P: CssxObject
  container: CssxObject
  showonlyDesktop: CssxObject
}

export const headerStyle: HeaderStyleInterface = {
  wrapper: {
    // bg: "#1e294f",
    px: 44.4,
    py: 70,
    mb: "-80",
    // pb: "100rem",
    backgroundImage: "url(xcmbg/starsbg.svg)",
    pos: "relative",
    overflow: "hidden",
    // "&::before": {
    //   content: "''",
    //   // background: "url('xcmbg/curvebg.svg')",
    //   position: "absolute",
    //   // left: "-50%",
    //   // right: 0,
    //   // top: "-50%",
    //   width: "100%",
    //   height: "100%",
    //   zIndex: "-1",
    //   overflowX: "hidden",
    //   backgroundPosition: "100% 100%",
    //   backgroundRepeat: "no-repeat",
    //   "@mq": {
    //     xsm: {
    //       background: "url('xcmbg/curvebgMobile.svg')",
    //       left: 0,
    //       backgroundRepeat: "no-repeat",
    //       right: 0,
    //       bottom: 0,
    //       backgroundSize: "cover",
    //       top: "-10.375rem",
    //     },
    //     phablet: {
    //       background: "url('xcmbg/curvebgMobile.svg')",
    //       left: 0,
    //       backgroundRepeat: "no-repeat",
    //       right: 0,
    //       bottom: 0,
    //       backgroundSize: "cover",
    //       top: "-12.375rem",
    //       height: "auto",
    //     },
    //     tablet: {
    //       background: "url('xcmbg/curvebgTablet.svg')",
    //       left: 0,
    //       backgroundRepeat: "no-repeat",
    //       right: 0,
    //       bottom: 0,
    //       backgroundSize: "cover",
    //       top: "-12.375rem",
    //       height: "auto",
    //     },
    //   },
    // },
    mt: 164,
    "@mq": {
      xsm: {
        px: 0,
        mt: 0,
      },
      tablet: {
        mt: 0,
        pb: 70,
      },
    },
  },
  h1: {
    color: "white",
    fontFamily: "Mulish",
    fontSize: 62,
    fontWeight: 800,
    lineHeight: "72px",
    "@mq": {
      xsm: {
        fontSize: "2.2rem",
        lineHeight: "34px",
        mt: "2rem",
      },
      tablet: {
        fontSize: 62,
        fontWeight: 800,
        lineHeight: "72px",
        maxWidth: 504,
        textAlign: "center",
        m: "auto",
      },
    },
  },
  bigP: {
    fontSize: 20,
    lineHeight: "32px",
    color: "white",
    fontWeight: 600,
    fontFamily: "Mulish",
    mt: 24,
    "@mq": {
      xsm: {
        fontSize: 16,
        lineHeight: "20px",
        mt: 10
      },
      tablet: {
        maxWidth: 504,
        textAlign: "center",
        m: "auto",
        mb: 32,
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
  container: {
    mt: 164,
    pt: 36,
    "@mq": {
      xsm: {
        mt: 49,
      },
    },
  },
  showonlyDesktop: {
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
      },
    },
  },
}
