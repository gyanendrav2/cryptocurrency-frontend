import { CssxObject } from "@react-cssx/core"

interface ValueTrustStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  p: CssxObject
}

export const valueTrustStyle: ValueTrustStyleInterface = {
  wrapper: {
    py: 160,
  },
  heading: {
    color: "purple.default",
    fontSize: 48,
    lineHeight: "56px",
    fontWeight: 800,
    mx: "auto",
    textAlign: "center",
    mb: 80,
  },
  p: {
    color: "purple.default",
    mt: 56,
    textAlign: "center",
  },
}
