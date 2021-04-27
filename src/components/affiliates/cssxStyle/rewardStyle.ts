import { CssxObject } from "@react-cssx/core"

interface RewardStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  p: CssxObject
}

export const rewardStyle: RewardStyleInterface = {
  wrapper: {
    backgroundColor: "grey.dark",
    py: 160,
  },
  heading: {
    color: "indigo.light",
    textAlign: "center",
    fontSize: 48,
    lineHeight: "56px",
    fontWeight: 800,
    mb: 80,
  },
  img: {
    mx: "auto",
  },
  p: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    color: "white",
    mt: 60,
  },
}
