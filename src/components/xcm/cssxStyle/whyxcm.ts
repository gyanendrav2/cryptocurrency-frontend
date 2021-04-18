import { CssxObject } from "@react-cssx/core"

interface WhyXCMstyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
}

export const whyXCMstyle: WhyXCMstyleInterface = {
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
  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}
