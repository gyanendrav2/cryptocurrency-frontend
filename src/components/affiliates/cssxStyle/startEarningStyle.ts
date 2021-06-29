import { CssxObject } from "@react-cssx/core"

interface StartEarningStyleInterface {
  heading: CssxObject
  bigP: CssxObject
  wrapper: CssxObject
  headingContainer: CssxObject
  imgDesk: CssxObject
}
const bgImage: CssxObject = {
  content: "''",
  background: "url('affiliates/startEarnBgMob.png')",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
  backgroundRepeat: "no-repeat",
  zIndex: 1,
  backgroundPosition: "bottom",
}

export const StartEarningStyle: StartEarningStyleInterface = {
  wrapper: {
    pos: "relative",
    bg: "grey.dark",
    backgroundImage: "url('affiliates/planeMob.png')",
    backgroundPosition: "100% 60%",
    pb: "10rem",
    pt: "3rem",
    backgroundRepeat: "no-repeat",
    overflowX: "hidden",
    "@mq": {
      xsm: {
        backgroundImage: "url('affiliates/planeMob.png')",
        backgroundPosition: "100% 72%",
        pb: "14rem",
      },
      tablet: {
        backgroundImage: "url('affiliates/planeTab.png')",
        backgroundPosition: "100% 43%",
        pb: "10rem",
      },
      desktop: {
        backgroundImage: "url('affiliates/startEarningbg3.png')",
        backgroundPosition: "250% 15%",
        pb: "10rem",
      },
      xxl: {
        backgroundImage: "url('affiliates/startEarningbg3.png')",
        backgroundPosition: "210% 15%",
        pb: "10rem",
      },
    },
    "&::before": {
      content: "''",
      ...bgImage,
      "@mq": {
        xsm: {
          ...bgImage,
          background: "url('affiliates/startEarnBgMob.png')",
          backgroundPosition: "100% 100%",
        },
        tablet: {
          ...bgImage,
          background: "url('affiliates/startEarnBgTab.png')",
          backgroundPosition: "100% 100%",
        },
        desktop: {
          ...bgImage,
          background: "url('affiliates/startEarnDesk.png')",
          backgroundPosition: "100% 100%",
        },
      },
    },
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    flexDirection: "column",
    zIndex: "2",
    "@mq": {
      tablet: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        justifyItems: "center",
        alignContent: "center",
        flexDirection: "column",
      },
    },
  },
  heading: {
    color: "indigo.light",
    fontSize: 32,
    fontWeight: 800,
    lineHeight: "40px",
    maxWidth: 680,
    mx: "auto",
    textAlign: "center",
    "@mq": {
      xsm: {
        mx: "auto",
      },
      tablet: {
        fontSize: 48,
        fontWeight: 800,
        lineHeight: "56px",
        mx: "auto",
        textAlign: "left",
      },
      desktop: {
        textAlign: "left",
        maxWidth: "35rem",
        paddingTop: "5rem",
        ml: "unset",
      },
    },
  },
  bigP: {
    // mx: "auto",
    maxWidth: 592,
    color: "white",
    fontSize: "20px",
    mt: 24,
    mb: 32,
    textAlign: "center",
    "@mq": {
      tablet: {
        textAlign: "left",
      },
      desktop: {
        textAlign: "left",
        ml: "unset",
      },
    },
  },
  imgDesk: {
    position: "absolute",
    top: "3vw",
    right: "20vw",
    transform: "matrix(1.5, 0, 0, 2, 1, 1)",
    // zIndex: "-1",
    "@mq": {
      xsm: {
        top: "5rem",
        right: "5vw",
        width: "7rem",
      },
      tablet: {
        top: "2rem",
        right: "15vw",
        width: "10rem",
      },
      desktop: {
        top: "21vw",
        right: "-10vw",
        width: "auto",
      },
    },
  },
}
