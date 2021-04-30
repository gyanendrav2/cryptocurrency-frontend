import { CssxObject } from "@react-cssx/core"

interface CommissionStyleInterface {
  heading: CssxObject
  p: CssxObject
  table: CssxObject
  tableWrapper: CssxObject
  wrapper: CssxObject
}

export const CommissionStyle: CommissionStyleInterface = {
  wrapper: {
    pt: 40,
    pb: 40,
    backgroundColor: "grey.bg",
    "@mq": {
      desktop: {
        pt: 148,
        pb: 169,
      },
    },
  },
  heading: {
    color: "purple.default",
    fontSize: 32,
    fontWeight: 800,
    lineHeight: "40px",
    textAlign: "center",
    mx: "auto",
    "@mq": {
      tablet: {
        fontSize: 48,
        lineHeight: "56px",
        maxWidth: 680,
      },
    },
  },
  p: {
    textAlign: "center",
    mx: "auto",
    maxWidth: 592,
    color: "grey.dark",
    mt: 32,
    mb: 24,
    fontSize: 20,
    lineHeight: "32px",
    "@mq": {
      tablet: {
        mb: 32,
      },
      desktop: {
        mb: 56,
      },
    },
  },
  table: {
    width: "100%",
  },
  tableWrapper: {
    backgroundColor: "white",
    border: "1px solid",
    borderColor: "grey.light",
    borderRadius: 4,
    px: 32,
    display: "none",
    "@mq": {
      tablet: {
        display: "block",
      },
    },
    "& th, td": {
      borderBottom: "1px solid",
      borderColor: "grey.light",
      textAlign: "center",
      py: 40,
      px: 10,
    },
    "& th": {
      pt: 20,
      pb: 30,
    },
    "& td:first-of-type": {
      textAlign: "left",
      py: 40,
    },
    "& tr:last-child td": {
      borderBottom: "none",
    },
  },
}
