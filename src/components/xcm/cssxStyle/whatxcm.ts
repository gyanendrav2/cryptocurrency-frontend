import { CssxObject } from "@react-cssx/core"

interface whatXcmStyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
  DiagramIconStyles:CssxObject
}

export const whatXcmStyle: whatXcmStyleInterface = {
  wrapper: {
    zIndex: 1,
    // pos: "relative",
    // overflow: "hidden",
    // "&::before": {
    //   content: "''",
    //   background: "url('xcmbg/xcmEcobg.svg')",
    //   position: "absolute",
    //   left: "-50%",
    //   right: 0,
    //   top: "-50%",
    //   width: "100%",
    //   height: "100%",
    //   zIndex: "-1",
    //   overflowX: "hidden",
    //   backgroundPosition: "100% 100%",
    //   backgroundRepeat: "no-repeat",
    //   transform: "scale(2)",
    // },
  },
  h6: {
    fontWeight: 800,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    color: "purple.default",
    marginTop:"2.5rem",
    marginBottom:"2rem"
  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom:"3.5rem"

  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
  DiagramIconStyles:{
    marginTop:"10rem"
  }
}

