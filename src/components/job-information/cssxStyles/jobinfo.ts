import { CssxObject } from "@react-cssx/core"

export interface JobinfoStyle {
  jobWrapper: CssxObject
  heading: CssxObject
  image: CssxObject
  backLink: CssxObject
  place: CssxObject
  textHeading: CssxObject
  jobinfo: CssxObject
  jobinfoText: CssxObject
  listItemText: CssxObject
  imageContainer: CssxObject
  applicationContainer: CssxObject
}

export const jobinfoStyle: JobinfoStyle = {
  jobWrapper: {
    bg: "#F2F3F8",
    pt: "12.75rem",
    "&::before": {
      content: "''",
    },
  },
  backLink: {
    fontSize: "1.25rem",
    letterSpacing: "0.01em",
    fontWeight: 800,
    color: "grey.light3",
    cursor: "pointer",
    display: "inline-block",
  },
  heading: {
    color: "primary",
    fontSize: "2.5rem",
    fontWeight: 800,
    mt: "4.5rem",
    mb: "2rem",
    letterSpacing: "0.01em",
    zIndex: 1,
  },
  image: {
    position: "absolute",
    left: "3%",
    right: 0,
    top: "7%",
    zIndex: 0,
    objectFit: "contain",
  },
  place: {
    textTransform: "uppercase",
    color: "primary",
    fontSize: "1rem",
    fontWeight: 800,
    letterSpacing: "0.1em",
  },
  textHeading: {
    fontWeight: 800,
    fontSize: "2rem",
    color: "primary",
    mt: "4.5rem",
    mb: "2rem",
  },
  jobinfo: {
    mt: "5rem",
  },
  jobinfoText: {
    fontSize: "1rem",
    color: "primary",
    fontWeight: 400,
    mb: "2rem",
    fontFamily: "Droid Sans",
    letterSpacing: "0.0275em",
  },
  listItemText: {
    fontSize: "1rem",
    color: "primary",
    fontWeight: 400,
    fontFamily: "Droid Sans",
    letterSpacing: "0.0275em",
  },
  imageContainer: {
    background: "url(career/jobinfo_ship.svg)",
    width: "100%",
    height: "477px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
  },
  applicationContainer: {
    width: "31.5rem",
  },
}
