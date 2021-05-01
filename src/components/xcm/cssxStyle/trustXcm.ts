import { CssxObject } from "@react-cssx/core"

interface TrustXcmStyleInterface {
  wrapper: CssxObject
  h2: CssxObject
  P: CssxObject
}

export const TrustXcmStyle: TrustXcmStyleInterface = {
  wrapper: {
    zIndex: 1,
  },
  h2: {
    fontWeight: 800,
    fontSize: "2rem",
    lineHeight: "2.5rem",
    color: "purple.default",
    marginBottom: "2rem",
    "@mq": {
      tablet: {
        lineHeight: "3.5rem",
        fontSize: "3.2rem",
        marginBottom: "3.5rem",
      },
    },
  },
  P: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
  },
}
