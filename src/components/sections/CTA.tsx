import React, { ReactElement } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { Text } from "../../ui/Text"
import Logo from "../../../public/logo.svg"
import { Container } from "../../ui/Container"
import { H2 } from "../../ui/Typography"
import { Button } from "../../ui/Button"
import { PrismicImage } from "../../ui/PrismicImage"
import TopDecorator from "../../../public/cta_bg_top.svg"
import BottomDecorator from "../../../public/cta_bg_bottom.svg"

export interface ICtaProps {
  data: any
}

export function Cta({ data }: ICtaProps): ReactElement {
  return (
    <Box cssx={{ pos: "relative" }}>
      <Flex cssx={{ bg: "grey.bg", display: { _: "none", tablet: "block" } }}>
        <Element as={TopDecorator} cssx={{ ml: "auto" }} />
      </Flex>
      <Box cssx={{
        bg: "grey.dark", color: "white", mt: - 1, position: "relative", pt: { _: 70, desktop: 200 }, zIndex: 1,
      }}
      >
        <Box cssx={{ pos: "relative", pb: { _: 70, desktop: 150 }, overflowX: "hidden" }}>
          {/*
           // @ts-ignore */}
          <Element as="img" alt="" src="bg-dark-lines.png" cssx={{ pos: "absolute", left: 0, bottom: { _: "40%", desktop: 50 } }} />
          {/* <Element as="img" src="Screens.png" cssx={{ ml: "auto", pos: "relative" }} /> */}

          <Container cssx={{ pos: { _: "relative", desktop: "absolute" }, inset: 0, zIndex: 1 }}>
            <Flex>
              <Box cssx={{
                w: "full",
                textAlign: "left",
                mb: 30,
                "@mq": {
                  desktop: {
                    mr: "auto",
                    w: 1 / 2,
                    mb: "unset",
                    pr: 20,
                  },
                },
              }}
              >
                <Element as={Logo} cssx={{ w: 260, h: 65 }} />

                <H2 cssx={{ color: "indigo.light", pr: { desktop: 30 }, mt: 40 }} richText>
                  {data.cta_title}
                </H2>

                <Text cssx={{ mt: 20 }} richText>{data.cta_content}</Text>

                <Box cssx={{ mt: 40 }}>
                  <Button as="a" href="https://go.coinmetro.com/account/signup" variant="yellow" cssx={{ fontSize: 20 }}>
                    {data.string_get_started}
                  </Button>
                </Box>

              </Box>
            </Flex>
            {/* <Box cssx={{ */}
            {/*  ml: "auto", pos: "relative", w: "full", display: { _: "block", desktop: "none" }, */}
            {/* }} */}
            {/* > */}
            {/*  <Image ratio={1376 / 882} src="Screens-mobile.png" /> */}
            {/* </Box> */}
          </Container>

          <Box cssx={{
            pos: "relative",
            w: "full",
            maxWidth: 720,
            px: 20,
            ml: "auto",
            "@mq": {
              desktop: {
                w: "55%",
                maxWidth: "unset",
                px: "unset",
                transform: "translateX(10%)",
              },
            },
          }}
          >
            <PrismicImage node={data.cta_image} />
          </Box>

        </Box>
      </Box>

      <Element
        as={BottomDecorator}
        cssx={{
          pos: "absolute", top: "calc(100% - 2px)", left: 0, right: 0, w: "full", h: "auto",
        }}
      />
    </Box>
  )
}
