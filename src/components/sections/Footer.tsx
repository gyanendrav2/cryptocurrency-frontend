import React, { ReactElement } from "react"
import {
  Box, Element, Flex, Grid,
} from "@react-cssx/core"
import { Container } from "../../ui/Container"
import { Text } from "../../ui/Text"
import TopDecorator from "../../../public/footer_bg_top.svg"

export interface IFooterProps {
  data: any
}

const Column = ({ title, list }) => (
  <Box>
    <Text cssx={{
      fontWeight: 800, mb: 30, color: "white", "& > p:not(:last-child)": { mb: 16 },
    }}
    >{title}
    </Text>
    {list.map((item, index) => (<Box key={`${title}-${item.name}-${index}`}><Text as="a" href={item.link.url} target={item.link.target} cssx={{ color: "white", fontSize: 16, ":hover": { textDecoration: "underline" } }}>{item.name}</Text></Box>))}
  </Box>
)

export function Footer({ data }: IFooterProps): ReactElement {
  return (
    <Box cssx={{ pos: "relative" }}>

      <Flex cssx={{ mb: - 1, bg: "grey.bg", display: { _: "none", tablet: "block" } }}>
        <Element as={TopDecorator} cssx={{ mr: "auto" }} />
      </Flex>

      <Box cssx={{ pos: "relative", bg: "grey.dark" }}>

        <Container cssx={{ position: "relative", pt: 40 }}>
          <Grid columns={{ _: 2, desktop: 4 }} cssx={{ rowGap: 40 }}>
            <Column title={data.string_products} list={data.footer_products} />
            <Column title={data.string_learn} list={data.footer_learn} />
            <Column title={data.string_company} list={data.footer_company} />
            <Column title={data.string_support} list={data.footer_support} />
          </Grid>

          <Element as="hr" cssx={{ color: "teal.light", my: 30 }} />

          <Grid columns={{ _: 2, desktop: 4 }} cssx={{ rowGap: 30 }}>

            {data.footer_misc.map((item, index) => (
              <Box key={`misc-links-${index}`}>
                <Text as="a" cssx={{ color: "white", fontSize: 16, ":hover": { textDecoration: "underline" } }} href={item.link.url} target={item.link.target}>
                  {item.name}
                </Text>
              </Box>
            ))}

            <Flex
              wrap="wrap"
              cssx={{
                display: { _: "flex", tablet: "none", desktop: "flex" },
                "& > a": {
                  mb: { _: 12, desktop: "unset" },
                  mr: { _: 12, desktop: 16 },
                  w: { _: 25, desktop: 30 },
                  h: { _: 25, desktop: 30 },
                },
              }}
            >

              {data.footer_social_media.map((item, index) => (
                <a key={`desktop-${item.icon.url + String(index)}`} href={item.link?.url} target={item.link?.target} rel="noopener noreferrer">
                  <Element as="img" aria-label={item.icon.alt} src={item.icon.url} alt={item.icon.alt} />
                </a>
              ))}

            </Flex>
          </Grid>
          <Flex
            cssx={{
              display: { _: "none", tablet: "flex", desktop: "none" },
              mt: 30,
              "& > a:not(:last-child)": {
                mr: 16,
                w: 30,
                h: 30,
              },
            }}
          >
            {data.footer_social_media.map((item, index) => (
              <a key={item.icon.url + String(index)} href={item.link?.url} target={item.link?.target} rel="noopener noreferrer">
                <Element as="img" aria-label={item.icon.alt} src={item.icon.url} alt={item.icon.alt} />
              </a>
            ))}
          </Flex>
        </Container>

        <Box cssx={{ bg: "grey.bg", py: 24, mt: 30 }}>
          <Container>
            <Element cssx={{ color: "grey.dark" }}>Copyright © {new Date().getFullYear()} CoinMetro OÜ</Element>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
