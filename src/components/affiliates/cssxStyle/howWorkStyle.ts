import { CssxObject } from "@react-cssx/core"

interface HowWorksStyleInterface {
  h1: CssxObject
  p: CssxObject
  img: CssxObject
  TabImg: CssxObject
  mobImg: CssxObject
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
}
