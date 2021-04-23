import { CssxObject } from "@react-cssx/core"

interface HeaderStyleInterface {
  // wrapper: CssxObject
  h1: CssxObject
  bigP: CssxObject
  P: CssxObject
  container: CssxObject
  showonlyDesktop: CssxObject
  cardWrapper: CssxObject
}

export const headerStyle: HeaderStyleInterface = {
  // wrapper: {
  //   px: 44.4,
  //   py: 70,
  //   mb: "-80",
  //   backgroundImage: "url(xcmbg/starsbg.svg)",
  //   pos: "relative",
  //   overflow: "hidden",
  //   mt: 164,
  //   "@mq": {
  //     xsm: {
  //       px: 0,
  //       mt: 0,
  //     },
  //     tablet: {
  //       mt: 0,
  //       pb: 70,
  //     },
  //   },
  // },
  h1: {
    fontSize: "2.625rem",
    lineHeight: "3.375rem",
    mt: "2rem",
    textAlign: "center",
    fontFamily: "Mulish",
    color: "white",
    fontWeight: 800,
    "@mq": {
      tablet: {
        fontSize: "3.875rem",
        lineHeight: "72px",
        maxWidth: 504,
        mx: "auto",
      },
      desktop: {
        mt: 0,
        color: "white",
        fontSize: "3.875rem",
        fontWeight: 800,
        textAlign: "left",
      },
    },
  },
  bigP: {
    fontSize: "1.25rem",
    lineHeight: "20px",
    mt: 16,
    fontFamily: "Mulish",
    color: "white",
    textAlign: "center",
    "@mq": {
      tablet: {
        maxWidth: 504,
        textAlign: "center",
        m: "auto",
        my: 32,
        lineHeight: "2rem",
      },
      desktop: {
        mt: 32,
        textAlign: "left",
        lineHeight: "2rem",
        fontSize: 20,
        fontWeight: 600,
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
  cardWrapper: {
    p: 24,
    backgroundColor: "grey.dark2",
    borderRadius: 8,
    // maxWidth: 416,
    width: "100%",
    // mx: "auto",
    mt: 16,
    "@mq": {
      pahblet: {
        mt: 16,
        p: 8,
        backgroundColor: "grey.dark2",
        borderRadius: 8,
      },
      desktop: {
        mt: 110,
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
