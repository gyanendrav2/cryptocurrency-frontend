import { CssxObject } from "@react-cssx/core"

interface HowWorksStyleInterface {
  h1: CssxObject
  p: CssxObject
  img: CssxObject
  TabImg: CssxObject
  mobImg: CssxObject
  listContainer: CssxObject
  cicle: CssxObject
  stepHeading: CssxObject
  stepDes: CssxObject
  cicleLast: CssxObject
}

export const HowWorksStyle: HowWorksStyleInterface = {
  h1: {
    color: "purple.default",
    fontSize: 48,
    lineHeight: "56px",
    fontWeight: 800,
    mt: 86,
    "@mq": {
      desktop: {},
    },
  },
  p: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    mt: 24,
    color: "grey.dark",
  },
  img: {
    width: "100%",
    transform: "translateX(-4rem)",
    mt: 104,
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
      },
    },
  },
  mobImg: {
    width: "100%",
    "@mq": {
      tablet: {
        display: "none",
      },
    },
  },
  TabImg: {
    width: "100%",
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
  listContainer: {
    "& ul": {
      mt: "18rem",
    },
  },
  cicle: {
    w: 32,
    height: 32,
    bg: "grey.light",
    borderRadius: "50%",
    mr: 24,
    pos: "relative",
    "&::after": {
      content: "''",
      pos: "absolute",
      top: "5rem",
      left: "1rem",
      width: "1px",
      height: "6rem",
      bg: "grey.light",
    },
  },
  cicleLast: {
    w: 32,
    height: 32,
    bg: "grey.light",
    borderRadius: "50%",
    mr: 24,
    pos: "relative",
  },
  stepHeading: {
    fontSize: 24,
    lineHeight: "32px",
    fontWeight: 800,
    color: "purple.default",
    mb: 12,
  },
  stepDes: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    mb: 104,
  },
}
