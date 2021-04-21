import { CssxObject } from "@react-cssx/core"

interface trustXcmStyleInterface {
  wrapper: CssxObject
  h2: CssxObject
  P: CssxObject
  img:CssxObject
}

export const TrustXcmStyle: trustXcmStyleInterface = {
  wrapper: {
    zIndex: 1,
  },
  h2: {
    fontWeight: 800,
    fontSize: "3.2rem",
    lineHeight: "3.5rem",
    color: "purple.default",
    marginBottom: "3.5rem",
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
  img:{
    width: 592,
    height: 333,
  }
}
