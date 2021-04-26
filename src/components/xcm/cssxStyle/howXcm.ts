import { CssxObject } from "@react-cssx/core"

export interface HowXcmStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  globeImg: CssxObject
  title: CssxObject
  wrapper2: CssxObject
}

export const howXcmStyle: HowXcmStyleInterface = {
  wrapper: {
    pos: "relative",
    top: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    background: "url('xcmbg/union.png')",
    marginTop: "-2rem",
    backgroundSize: "cover",
    backgroundPosition: "100% 50%",
    zIndex: "2",
    "&::before": {
      content: "''",
      backgroundImage: "url(xcmbg/howBgstars.png)",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "-2",
      overflowX: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "100%, 100%",
      backgroundRepeat: "no-repeat",
      transform: "scale(1)",
    },
  },
  wrapper2: {
    pos: "relative",
    overflow: "hidden",
    height: "5rem",
    marginTop: "-5px",
    bg: "grey.bg",
    "&::before": {
      content: "''",
      background: "url('xcmbg/xcmEcobg.svg')",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      //  overflowX: "hidden",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      // backgroundPosition: "100% 100%",
    },
  },
  heading: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "2rem",
    lineHeight: "2.5rem",
    textAlign: "center",
    color: "indigo.light",
    paddingTop: "4.5rem",
    marginBottom: "2.5rem",
    marginTop: "2rem",
    "@mq":{
      tablet:{
        fontSize: "3rem",
       lineHeight: "4rem",
       paddingTop: "8.5rem",
      marginBottom: "3.5rem",
      }

    }
  },
  img: {
    margin: "auto",
    zIndex: 0,
    position: "relative",
  },
  globeImg: {
    position: "absolute",
    top: "-3rem",
    right: "20rem",
    zIndex: "-1",
    "@mq": {
      xsm: {
        top: "-2rem",
        right: "15vw",
        width: "7rem",
      },
      tablet: {
        top: "-1rem",
        right: "15vw",
        width: "10rem",
      },
      desktop: {
        top: "-3rem",
        right: "32vw",
        width: "auto",
      },
    },
  },
  title: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    textAlign: "center",
    margin: "auto",
    maxWidth: 502,
    color: "white",
    marginTop: "2rem",
  },
}
