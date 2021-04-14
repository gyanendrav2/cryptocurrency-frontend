import React, { ReactElement } from "react"
import { Box } from "@react-cssx/core"
import { H2 } from "../../ui/Typography"
import { Container } from "../../ui/Container"
import { PrismicImage } from "../../ui/PrismicImage"

export interface IGlobeProps {
  data: any
}

export function Globe({ data }: IGlobeProps): ReactElement {
  return (
    <>
      <Container>
        <H2
          cssx={{
            textAlign: "center",
            color: "indigo.light",
            // maxWidth: 800,
            mx: "auto",
            mt: { _: 160, tablet: 200 },
            mb: 40,
          }}
          richText
        >{data.regulations_trust}
        </H2>
      </Container>
      <Box cssx={{ overflow: "hidden" }}>
        <Box cssx={{
          mx: "auto",
          // @ts-ignore
          display: { _: "none", tablet: "block" },
        }}
        >
          <PrismicImage node={data.asset_globe} cssx={{ maxWidth: 1000, mx: "auto" }} />
        </Box>
        <Box
          cssx={{
            mx: "auto",
            w: "full",
            // @ts-ignore
            display: { tablet: "none" },
          }}
        >
          <PrismicImage node={data.asset_globe_mobile} />
        </Box>
      </Box>
    </>
  )
}
