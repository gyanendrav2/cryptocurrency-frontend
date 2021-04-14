import React, { ReactElement } from "react"
import {
  Box, Element, Flex, Grid,
} from "@react-cssx/core"
import { Container } from "../../ui/Container"
import { H2 } from "../../ui/Typography"
import { Text } from "../../ui/Text"
import { Globe } from "./Globe"
import TopSeparator from "../../../public/regulations/top-separator.svg"
import { PrismicImage } from "../../ui/PrismicImage"

export interface IRegulationsProps {
  data: any
}

const WithUrl = ({ url, children, ...props }) => {
  if (url) return <a href={url} target="blank" rel="noopener noreferrer" {...props}>{children}</a>
  return <>{children}</>
}

export function Regulations({ data }: IRegulationsProps): ReactElement {
  return (
    <Box cssx={{ pos: "relative" }}>
      <Box cssx={{ pos: "relative" }}>
        <Element as={TopSeparator} cssx={{ w: "full", backgroundColor: "grey.bg" }} />
        <Box cssx={{
          pos: "absolute",
          right: 0,
          w: 65 / 100,
          zIndex: 1,
          top: "-80%",
          "@mq": {
            phablet: {
              top: "-13%", w: 40 / 100,
            },
          },
        }}
        >
          <PrismicImage node={data.asset_floating_island} />
          {/* <Image ratio={2749 / 3547} src="regulations/floatingisland.png" /> */}
        </Box>
      </Box>

      <Box cssx={{
        background: "linear-gradient(#0f1933, #32407B)",
        color: "white",
        mt: - 2,
        pos: "relative",
        pt: 45,
      }}
      >
        <Container>
          <Box cssx={{ pos: "relative", zIndex: 2, py: { _: 50, desktop: 100 } }}>
            <H2
              cssx={{
                textAlign: "center",
                color: "indigo.light",
                mt: "auto",
                mx: "auto",
                maxWidth: 800,
              }}
              richText
            >
              {data.regulations_title}
            </H2>
            <Text
              cssx={{
                color: "white", textAlign: "center", mt: 40, maxWidth: 640, mx: "auto",
              }}
              richText
            >{data.regulations_content}
            </Text>
          </Box>

          <Flex align="center">
            <Grid columns={3} cssx={{ w: "full" }} gap={20}>

              {data.licences.map((item, index) => (
                <Box key={item.flag.url + String(index)}>
                  <Box cssx={{ mx: "auto", mb: 40, w: { _: 80, tablet: 120 } }}>
                    <PrismicImage node={item.flag} />
                  </Box>
                  <Element cssx={{ mx: "auto" }}>
                    <WithUrl url={item.url}>
                      <PrismicImage node={item.logo} fit="contain" />
                    </WithUrl>
                  </Element>
                </Box>
              ))}

            </Grid>
          </Flex>
        </Container>
        <Globe data={data} />
      </Box>
    </Box>
  )
}
