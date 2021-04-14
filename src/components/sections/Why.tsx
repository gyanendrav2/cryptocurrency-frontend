import React, { ReactElement } from "react"
import {
  Box, Flex, Element, Grid,
} from "@react-cssx/core"
import { Container } from "../../ui/Container"
import { H2, H3 } from "../../ui/Typography"
import { Text } from "../../ui/Text"
import { PrismicImage } from "../../ui/PrismicImage"
import BgWaves from "../../../public/markets_bg_bottom.svg"

export interface IWhyProps {
  data: any
}

export function Why({ data }: IWhyProps): ReactElement {
  return (
    <Box cssx={{ pos: "relative" }}>
      <Element
        as={BgWaves}
        cssx={{
          position: "absolute", bottom: "100%", left: 0, right: 0, w: "full", h: "auto",
        }}
      />
      <Box cssx={{ bg: "grey.bg", py: { _: 80, desktop: 120 }, mt: - 1 }}>
        <Container cssx={{ pos: "relative" }}>

          <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
            <H2 richText>{data.why_title}</H2>
            <Text cssx={{ maxWidth: { tablet: 2 / 3 }, textAlign: "center", mt: 20 }} richText>{data.why_content}</Text>
          </Flex>

          <Grid columns={{ _: 1, tablet: 2, desktop: 4 }} gap={40} cssx={{ mt: 40 }}>
            {data.why_bullets.map((bullet, index) => (
              <Flex direction="column" align="center" key={`why.bullet.${index}`}>
                <Box cssx={{ w: { _: 1 / 2, tablet: 2 / 3 } }}>
                  <PrismicImage node={bullet.image} alt={bullet.title[0].text} />
                </Box>
                <Box cssx={{ textAlign: "center" }}>
                  <H3 richText cssx={{ fontSize: 24 }}>{bullet.title}</H3>
                  <Text cssx={{ mt: 10 }} richText>{bullet.content}</Text>
                </Box>
              </Flex>
            ))}
          </Grid>

        </Container>
      </Box>
    </Box>
  )
}

export function Why2({ data }: IWhyProps): ReactElement {
  return (
    <Box cssx={{ pos: "relative", pb: { _: 200, phablet: 300, desktop: 180 } }}>
      <Element
        as="img"
        src="Bg_lines.png"
        alt=""
        cssx={{
          pos: "absolute", bottom: 0, left: 0, right: 0, w: "full",
        }}
      />
      <Container cssx={{ mt: { _: 80, tablet: 140 }, pos: "relative" }}>

        <Flex wrap="wrap">

          <Box cssx={{
            w: { _: "full", desktop: 1 / 2 }, pr: { tablet: 50 }, mb: { _: 50, desktop: 0 }, textAlign: { _: "center", tablet: "left" },
          }}
          >
            <H2 richText>{data.why_title}</H2>
            <Text cssx={{ mt: 20 }} richText>{data.why_content}</Text>
          </Box>

          <Box cssx={{
            w: { _: "full", desktop: 1 / 2 },
            // mt: { _: 60, desktop: undefined },
            "& > div:not(:last-child)": { mb: { _: 30, desktop: 80 } },
          }}
          >

            {data.why_bullets.map((bullet, index) => (
              <Flex key={`why.bullet.${index}`} align="center" wrap="wrap">
                <Box cssx={{
                  w: { _: 5 / 12, desktop: 4 / 12 }, pl: { desktop: 20 }, mx: { _: "auto", tablet: "unset" }, maxWidth: { _: 135, desktop: "unset" },
                }}
                >
                  <PrismicImage node={bullet.image} alt={bullet.title[0].text} />
                  {/* <Image ratio={640 / 800} src={bullet.image.url} alt={bullet.title[0].text} /> */}
                </Box>
                <Box cssx={{ textAlign: { _: "center", tablet: "left" }, ml: { tablet: 30 }, w: { _: "full", tablet: 8 / 12 } }}>
                  <H3 richText>{bullet.title}</H3>
                  <Text cssx={{ mt: 10 }} richText>{bullet.content}</Text>
                </Box>
              </Flex>
            ))}
          </Box>

        </Flex>
      </Container>
    </Box>
  )
}
