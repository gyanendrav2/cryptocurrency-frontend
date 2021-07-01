import { CssxObject } from "@react-cssx/core"

export interface CareervacanciesStyle {
  wrapper: CssxObject
  table: CssxObject
  image: CssxObject
  heading: CssxObject
  curve: CssxObject
  postionHeading: CssxObject
}

export const vacanciesStyle: CareervacanciesStyle = {
  wrapper: {
    bg: "grey.light4",
    pos: "relative",
    transform: "translateY(-5px)",
  },
  heading: {
    fontWeight: 800,
    color: "purple.dark",
    fontSize: "2.5rem",
    mb: "6.5rem",
    mt: "10.812rem",
  },
  postionHeading: {
    fontWeight: 800,
    color: "primary",
    fontSize: "3rem",
    mb: "6.5rem",
    mt: "10.812rem",
  },
  curve: {
    pos: "absolute",
    top: 0,
    left: 0,
    right: 0,
    w: "100%",
  },
  table: {
    width: "100%",
    "& tr th": {
      paddingLeft: "2.25rem",
      color: "grey.light3",
      fontWeight: 700,
    },
    "& tr.tableSpacing": {
      backgroundColor: "#D9DCE7",
      "& td": {},
    },
    "& tr.dataRow": {
      backgroundColor: "white",
      cursor: "pointer",
      "&:hover": {
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #69D5DD",
        // boxShadow: "0px 4px 14px -5px rgba(0,0,0,0.75)",
      },
      "& td:first-child": {
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        color: "grey.light3",
        fontWeight: 700,
      },
      "& td:last-child": {
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
        color: "grey.light3",
        fontWeight: 700,
      },
      "& td": {
        padding: "2.25rem",
        color: "grey.dark",
        fontWeight: 800,
        verticalAlign: "middle",
      },
    },
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    objectFit: "contain",
    width: "100%",
  },
}
