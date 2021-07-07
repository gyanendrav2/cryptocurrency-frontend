import { CssxObject } from "@react-cssx/core"

export interface CareervacanciesStyle {
  table: CssxObject
  image: CssxObject
  heading: CssxObject
  curve: CssxObject
  postionHeading: CssxObject
}

export const vacanciesStyle: CareervacanciesStyle = {
  heading: {
    fontWeight: 800,
    color: "purple.dark",
    fontSize: "2.5rem",
    mb: "1.5rem",
    mt: "8.812rem",
    "@mq": {
      tablet: {
        mt: "5.812rem",
        mb: "2.5rem",
      },
      desktop: {
        mt: "10.812rem",
        mb: "6.5rem",
      },
    },
  },
  postionHeading: {
    color: "primary",
    mb: "1.5rem",
    mt: "8.812rem",
    "@mq": {
      tablet: {
        mt: "10.812rem",
        mb: "2.5rem",
      },
      desktop: {
        mt: "10.812rem",
        mb: "6.5rem",
      },
    },
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
      backgroundColor: "transparent",
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
      "& td:first-of-type": {
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
        padding: "1.75rem 2.25rem",
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
