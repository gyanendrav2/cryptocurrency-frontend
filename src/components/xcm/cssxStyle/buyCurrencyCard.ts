import { CssxObject } from "@react-cssx/core"

interface BuyCurrencyCard {
  input2: CssxObject
  input1: CssxObject
  inputIconStyles: CssxObject
  h4: CssxObject
  h6: CssxObject
  h2: CssxObject
  img: CssxObject
  wrapper: CssxObject
  inputLabel: CssxObject
  mobileTabletShow: CssxObject
}

export const buyCurrencyCardStyle: BuyCurrencyCard = {
  wrapper: {
    backgroundColor: "grey.dark2",
    borderRadius: 8,
    ml: 0,
    mb: 24,
    zIndex: 2,
    pos: "relative",
    mt: "4.3rem",
    p: 24,
    "@mq": {
      tablet: {
        mt: 0,
      },
      desktop: {
        maxWidth: 416,
        mx: "auto",
        ml: 32,
        mb: 140,
      },
    },
  },
  input2: {
    height: "4rem",
    w: 104,
    borderRadius: "0.5rem",
    backgroundColor: "grey.dark",
    marginLeft: "0.5rem",
  },
  input1: {
    w: "calc(100% - 125px)",
    height: "4rem",
    MarginLeft: "2rem",
    fontSize: "0.875rem",
    backgroundColor: "grey.dark",
    borderRadius: "0.5rem",
    resize: "none",
    padding: "1rem",
    paddingBottom: 0,
    color: "white",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      fontWeight: 700,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "white",
    },
  },
  inputIconStyles: {
    height: "4rem",
    width: "6.5rem",
    borderRadius: "0.5rem",
  },
  h4: {
    color: "white",
    fontSize: 24,
    ml: "6",
    fontWeight: 800,
    lineHeight: "32px",
    marginBottom: "1rem",
  },
  h6: {
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    color: "purple.default",
  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
  },
  img: {
    zIndex: "0",
    pos: "absolute",
    top: "-0.5rem",
    right: "8%",
    "@mq": {
      tablet: {
        top: "6.625rem",
        right: "-12.937rem",
        // zIndex:"-1"
      },
      desktop: {
        top: "6.625rem",
        right: "-8.937rem",
      },
    },
  },
  inputLabel: {
    position: "absolute",
    top: "0.5rem",
    left: "1rem",
    fontSize: 12,
    color: "teal.light",
    textTransform: "capitalize",
  },
  mobileTabletShow: {
    "@mq": {
      desktop: {
        display: "none",
      },
    },
  },
}
