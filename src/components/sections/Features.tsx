import React, { ReactElement } from "react"
import {
  Box, Flex, Element,
} from "@react-cssx/core"
import { Container } from "../../ui/Container"
import { H2, H3 } from "../../ui/Typography"
import { Text } from "../../ui/Text"
import Bullet from "../../../public/bullet.svg"

export interface IFeaturesProps {
  data: any
}

const Feature = ({
  feature, invert, index,
}: any) => (
  <Container>
    <Flex wrap="wrap" direction={{ _: "column-reverse", tablet: "row" }}>
      <Box cssx={{ p: { _: "125px 0 75px 0", tablet: "unset" }, w: { _: "full", tablet: 1 / 2 }, order: { tablet: invert ? 2 : 1 } }}>
        <Element
          as="img"
          alt={feature.title[0].text}
          src={feature.image.url}
          __cssx={{
            pos: "relative",
            zIndex: 0,
            transform: "scale(1.6)",
            objectFit: "contain",
            objectPosition: { _: "center center", tablet: invert ? "right center" : "left center" },
            w: "full",
            h: "full",
            // gridRow: { _: 2, tablet: "unset" },
            // gridColumn: { tablet: invert ? 2 : 1 },
          }}
        >
          {/* <PrismicImage node={feature.image} /> */}
        </Element>
      </Box>
      <Box cssx={{
        w: { _: "full", tablet: 1 / 2 },
        pt: { tablet: 60, desktop: 120 },
        pb: { tablet: 75, desktop: 150 },
        pos: "relative",
        zIndex: 2,
        order: { tablet: invert ? 1 : 2 },
        // gridColumn: { tablet: index % 2 ? 1 : 2 },
      }}
      >
        <Box cssx={{ pos: "relative" }}>
          <Element cssx={{
            color: "teal.lighter",
            // @ts-ignore
            fontSize: { _: 140, tablet: 200 },
            lineHeight: 0.75,
            fontWeight: 800,
          }}
          >
            &nbsp;
            {/* {String(index + 1).padStart(2, "0")} */}
          </Element>
          <H3 cssx={{ pos: "absolute", bottom: 30 }} richText>{feature.title}</H3>
        </Box>
        <Text cssx={{ color: "grey.dark", mb: 20 }} richText>{feature.content}</Text>

        {feature.bullets.map((bullet, bulletIndex) => (
          <Flex key={`feauture.bullet.${bulletIndex}`} align="baseline">
            <Box>
              <Element as={Bullet} cssx={{ w: 18, h: 12, mr: 6 }} />
            </Box>
            <Text cssx={{ fontSize: 16, color: "primary" }}>{bullet.text}</Text>
          </Flex>
        ))}

      </Box>
    </Flex>
  </Container>
)

export function Features({ data }: IFeaturesProps): ReactElement {
  return (
    <Box cssx={{
      bg: "grey.bg",
      pt: { _: 60, tablet: 100 },
      pb: 30,
      "& > div:not(:last-child)": { mb: { _: 20, desktop: 70 } },
      overflow: "hidden",
    }}
    >
      <H2 cssx={{ textAlign: "center", mb: 50 }} richText>{data.offers_title}</H2>

      {data.offers.map((feature, index) => (
        <Feature feature={feature} key={`feature.index.${index}`} index={index} invert={index % 2} />
      ))}

    </Box>
  )
}
