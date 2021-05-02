import { CssxObject } from "@react-cssx/core"

export interface HowXcmStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  globeImg: CssxObject
  title: CssxObject
}

export const howXcmStyle: HowXcmStyleInterface = {
  wrapper: {
    pos: "relative",
    top: 0,
    right: 0,
    overflow: "hidden",
    zIndex: "2",
    transform: "translateY(-30px)",
    "&::before": {
      content: "''",
      backgroundImage: "url(xcmbg/union.png)",
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
    "@mq": {
      xsm: {
        // backgroundPosition: "unset",
        pb: "3.5rem",
      },
      tablet: {
        // backgroundPosition:"unset"
      },
      desktop: {
        // marginTop: "-2rem",
      },
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
    "@mq": {
      tablet: {
        fontSize: "3rem",
        lineHeight: "4rem",
        paddingTop: "8.5rem",
        marginBottom: "3.5rem",
      },
    },
  },
  img: {
    margin: "0 auto",
    zIndex: 0,
    position: "relative",
    "@mq":{
      tablet:{
        top:"2rem"
      },
      desktop:{
        top:"6rem"
      }
    }
  },
  globeImg: {
    position: "absolute",
    top: "-2rem",
    right: "20rem",
    zIndex: "-1",
    "@mq": {
      xsm: {
        top: "-11vw",
        right: "15vw",
        width: "8rem",
      },
      phablet: {
        top: "-2vw",
        right: "15vw",
        width: "10rem",
      },
      tablet: {
        top: "1vw",
        right: "15vw",
        width: "10rem",
      },
      desktop: {
        top: "3.5vw",
        right: "32vw",
        width: "auto",
      },
      // xxl: {
      //   top: "3.5vw",
      //   right: "32vw",
      //   width: "auto",
      // },
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
