import { CssxObject } from "@react-cssx/core"

interface WhatXcmStyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
  coinIcon: CssxObject
  limitedContainer: CssxObject
  diagramIcon: CssxObject
}

export const whatXcmStyle: WhatXcmStyleInterface = {
  wrapper: {
    zIndex: "-2",
    pos: "relative",
    overflow: "hidden",
    mt: "-1",
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
    width: "100%",
    textAlign: "center",
    mx: "auto",
    "@mq": {
      desktop: {
        textAlign: "left",
      },
    },
  },
  h2: {
    fontWeight: 800,
    fontFamily: "Mulish",
    color: "purple.default",
    mb: "2rem",
    fontSize: "2rem",
    lineHeight: "2.5rem",
    width: "100%",
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
    width: "100%",
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
  diagramIcon: {
    mx: "auto",
    mt: "2rem",
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
    px: 0,
    backgroundColor: "transparent",
    // mt: { _: 0, desktop: 88 },
    zIndex: "-1",
    "@mq": {
      tablet: {
        paddingTop: 69,
      },
      desktop: {
        paddingTop: 433,
        px: 24,
      },
    },
  },
}
