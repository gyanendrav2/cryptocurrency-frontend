import React, { ReactElement, useEffect, useLayoutEffect } from "react"
import {
  AspectRatioBox, Box, CssxObject, Element, Flex,
} from "@react-cssx/core"
import { H2 } from "../../ui/Typography"
import { Text } from "../../ui/Text"
import { Button } from "../../ui/Button"
import { Container } from "../../ui/Container"

export interface IHeroProps {
  data: any
}

const Content = ({ data, mobile = false }: { data: any, mobile: boolean }) => (
  <>
    <Box cssx={{ pos: "absolute", inset: 0, zIndex: 10 }}>
      <Container cssx={{ pos: "relative", color: "white", pt: 150 }}>
        <Box cssx={{ maxWidth: "90%" }}>
          {mobile && (
            <H2 cssx={{ mt: { tablet: 40 }, color: "white" }}>{data.hero_title[0].text}</H2>
          )}
          {! mobile && (
            <H2 cssx={{ mt: { tablet: 40 }, color: "white" }} richText>
              {data.hero_title}
            </H2>
          )}

          <Text cssx={{ mt: 20 }} richText>
            {data.hero_content}
          </Text>
          <Box cssx={{ mt: 30 }}>
            <Button
              as="a"
              href="https://go.coinmetro.com/account/signup"
              variant="yellow"
              cssx={{
                fontSize: 20,
              }}
            >
              {data.string_get_started}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  </>
)

const baseCssX = {
  position: "absolute",
  zIndex: 0,
  height: "100%",
  width: "calc(60em + 50%)",
  minWidth: "100%",
  backgroundSize: "cover",
  backgroundPositionY: "45%",
} as CssxObject

const makeSrcSet = (imgId): CssxObject => ({
  backgroundImage: {
    _: "none",
    phablet: `url(hero/small_hero_${imgId}.png)`,
    xxl: `url(hero/the_best_crypto_exchange_${imgId}.png)`,
  },
})

const cssxFlexBox: CssxObject = {
  pos: "relative", display: { _: "none", phablet: "flex" }, overflow: "hidden", height: "50vw", width: "100%", minHeight: "850px",
}
const cssxBlob1 = { ...baseCssX, ...makeSrcSet("01") }
const cssxBlob2 = { ...baseCssX, ...makeSrcSet("02") }
const cssxBlob3 = { ...baseCssX, ...makeSrcSet("03") }
const cssxBlob4 = { ...baseCssX, ...makeSrcSet("04") }
const cssxBlob5: CssxObject = {
  position: "absolute",
  zIndex: 0,
  bottom: 0,
  right: 0,
  width: "600px",
  height: "231px",
  backgroundImage: {
    _: "none",
    phablet: "url(hero/the_best_crypto_exchange_05.png)",
  },
  backgroundSize: "cover",
}
const cssxMobile: CssxObject = {
  pos: "absolute",
  inset: 0,
  w: "full",
  backgroundImage: "url(hero/img_hero_mobile.jpg?123)",
  backgroundSize: "100% auto",
}

const useIsomorphicEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

export function Hero({ data }: IHeroProps): ReactElement {
  useIsomorphicEffect(() => {
    if (window.innerWidth < 480) return
    let lastOffset = window.pageYOffset
    const moveStuff = () => {
      if (window.pageYOffset !== lastOffset) {
        const offset = window.pageYOffset / 10
        document.getElementById("hero-blob-1").style.transform = `translateY(${3 * offset}px)`
        document.getElementById("hero-blob-3").style.transform = `translateY(${1 * offset}px)`
        document.getElementById("hero-blob-4").style.transform = `translateY(${3 * offset}px)`
        lastOffset = window.pageYOffset
      }
      window.requestAnimationFrame(moveStuff)
    }
    moveStuff()
  }, [])

  return (
    <>
      <Box cssx={{ position: "relative", bg: "grey.dark", color: "white" }}>
        <AspectRatioBox ratio={720 / 1480} cssx={{ display: { phablet: "none" } }}>
          <Box>
            <Element as="div" cssx={cssxMobile} />
            <Content data={data} mobile />
          </Box>
        </AspectRatioBox>

        <Flex justify="center" cssx={cssxFlexBox}>
          <Content mobile={false} data={data} />
          <Element as="div" id="hero-blob-1" cssx={cssxBlob1} />
          <Element as="div" id="hero-blob-2" cssx={cssxBlob2} />
          <Element as="div" id="hero-blob-3" cssx={cssxBlob3} />
          <Element as="div" id="hero-blob-4" cssx={cssxBlob4} />
        </Flex>
        <Element as="div" id="hero-blob-5" cssx={cssxBlob5} />
      </Box>
    </>
  )
}
