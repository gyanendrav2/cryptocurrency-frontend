import { CssxObject } from "@react-cssx/core"

interface WhyXCMstyleInterface {
  wrapper: CssxObject
  h6: CssxObject
  h2: CssxObject
  P: CssxObject
}

export const whyXCMstyle: WhyXCMstyleInterface = {
  wrapper: {
    background: "url('xcmbg/curvebg.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 208%",
    zIndex: 1,
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
