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
    pt: 148,
    pb: 169,
    backgroundColor: "grey.bg",
  },
  heading: {
    color: "purple.default",
    fontSize: 48,
    fontWeight: 800,
    lineHeight: "56px",
    maxWidth: 680,
    textAlign: "center",
    mx: "auto",
  },
  p: {
    textAlign: "center",
    mx: "auto",
    maxWidth: 592,
    color: "grey.dark",
    mt: 32,
    mb: 56,
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
    "& th, td": {
      borderBottom: "1px solid",
      borderColor: "grey.light",
      textAlign: "center",
      py: 40,
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
