import { CssxObject } from "@react-cssx/core"

interface trustXcmStyleInterface {
  wrapper: CssxObject
  leftWrapper:CssxObject
  rightWrapper:CssxObject
  h2: CssxObject
  P: CssxObject
}

export const TrustXcmStyle: trustXcmStyleInterface = {
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
  leftWrapper:{

  },
  rightWrapper:{

  },
  h2: {
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom: "3.5rem",
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}
