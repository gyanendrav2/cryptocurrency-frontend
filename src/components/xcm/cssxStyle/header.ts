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
    px: 44.4,
    py: 70,
    mb: "-80",
    backgroundImage: "url(xcmbg/starsbg.svg)",
    pos: "relative",
    overflow: "hidden",
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
    fontSize: "3.875rem",
    fontWeight: 800,
    lineHeight: "72px",
    "@mq": {
      xsm: {
        fontSize: "2.2rem",
        lineHeight: "34px",
        mt: "2rem",
        textAlign: "center",
      },
      tablet: {
        fontSize: 62,
        fontWeight: 800,
        lineHeight: "72px",
        maxWidth: 504,
        textAlign: "center",
        mx: "auto",
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
        fontSize: "1.25rem",
        lineHeight: "20px",
        mt: 16,
        textAlign: "center",
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
    pt: 36,
    mt: 64,
    "@mq": {
      // // xsm: {
      // //   pt: 36,
      // //   mt: 64,
      // // },

      // // phablet: {
      // //   pt: 36,
      // //   mt: 40,
      // // },
      // tablet: {
      //   pt: 36,
      //   mt: 136,
      // },
      desktop: {
        mt: "9.5rem",
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
