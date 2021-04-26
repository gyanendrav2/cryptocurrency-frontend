import { CssxObject } from "@react-cssx/core"

interface PriceStatisticsInterface {
  heading: CssxObject
  title: CssxObject
}

export const priceStatisticsStyle: PriceStatisticsInterface = {
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    lineHeight: "2.5rem",
    fontWeight: 800,
    color: "purple.default",
    marginBottom: 24,
    "@mq":{
      tablet:{
        fontSize: 48,
       lineHeight: "56px",
      }
    }
  },
  title: {
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    textAlign: "center",
    color: "grey.dark",
    mb: 40,
  },
}
