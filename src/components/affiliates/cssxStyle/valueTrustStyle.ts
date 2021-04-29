import { CssxObject } from "@react-cssx/core"

interface ValueTrustStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  p: CssxObject
}

export const valueTrustStyle: ValueTrustStyleInterface = {
  wrapper: {
    py:"2.5rem",
    "@mq":{
      tablet:{
     py: "5rem",
      },
      desktop:{
        py:160,
      }
    }
  },
  heading: {
    color: "purple.default",
    fontSize: 32,
    lineHeight: "40px",
    fontWeight: 800,
    mx: "auto",
    textAlign: "center",
    mb: 32,
    "@mq":{
      tablet:{
    fontSize: 48,
    lineHeight: "56px",
    fontWeight: 800,
    mb: 80,
      },
      desktop:{
        mb: 80,
      }
    }
  },
  p: {
    color: "purple.default",
    mt: 32,
    mb:32,
    textAlign: "center",
    "@mq":{
      desktop:{
        mt:56,
      }
    }
  },
}
