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
  TabimageContainer: CssxObject
}

export const jobinfoStyle: JobinfoStyle = {
  jobWrapper: {
    bg: "#F2F3F8",
    pt: "7.5rem",
    position: "relative",
    "@mq": {
      tablet: {
        pt: "9.5rem",
      },
      desktop: {
        pt: "12.75rem",
      },
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
    fontSize: "1.5rem",
    fontWeight: 800,
    mt: "1.5rem",
    mb: "2rem",
    letterSpacing: "0.01em",
    zIndex: 1,
    "@mq": {
      tablet: {
        fontSize: "2.5rem",
        maxWidth: "25.625rem",
        mt: "2rem",
        mb: "1.5rem",
        lineHeight: "120%",
      },
      desktop: {
        maxWidth: "100%",
        mt: "4.5rem",
        mb: "2rem",
        fontSize: "2.5rem",
      },
    },
  },
  TabimageContainer: {
    position: "absolute",
    top: "2%",
    right: "0%",
    display: "none",
    background: "url(career/jobinfo_ship_tab.svg)",
    width: "50%",
    height: "477px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    "@mq": {
      tablet: {
        display: "block",
      },
      desktop: {
        display: "none",
      },
    },
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
    fontSize: "1.5rem",
    color: "primary",
    mt: "1.5rem",
    mb: "1rem",
    "@mq": {
      tablet: {
        mt: "2rem",
        fontSize: "2rem",
        mb: "2rem",
      },
      desktop: {
        mt: "4.5rem",
        mb: "2rem",
      },
    },
  },
  jobinfo: {
    mt: "1rem",
    "@mq": {
      tablet: {
        mt: "2.5rem",
      },
      desktop: {
        mt: "5rem",
      },
    },
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
    display: "none",
    "@mq": {
      desktop: {
        display: "block",
        background: "url(career/jobinfo_ship.svg)",
        width: "100%",
        height: "477px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      },
    },
  },
  applicationContainer: {
    width: "100%",
    "@mq": {
      tablet: {
        mt: "2rem",
      },
      desktop: {
        mt: "0",
        width: "31.5rem",
      },
    },
  },
}
