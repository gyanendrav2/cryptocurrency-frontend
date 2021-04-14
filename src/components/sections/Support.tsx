import React, { ReactElement } from "react"
import { Box, Flex, Element } from "@react-cssx/core"
import { H2, H3 } from "../../ui/Typography"
import { Button } from "../../ui/Button"
import { PrismicImage } from "../../ui/PrismicImage"
import { Container } from "../../ui/Container"

export interface ISupportProps {
  data: any
}

const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null)
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    // @ts-ignore
    if (window.Trustpilot) {
      // @ts-ignore
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])
  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      data-locale="en-US"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="5e7a770cbc92ef0001733f42"
      data-style-height="140px"
      data-style-width="100%"
      data-theme="light"
      data-stars="4,5"
      data-review-languages="en"
      data-font-family="Muli"
    >
      {/* <a href="https://www.trustpilot.com/review/example.com" target="_blank" rel="noreferrer noopener"> Trustpilot */}
      {/* </a> */}
    </div>
  )
}

export function Support({ data }: ISupportProps): ReactElement {
  return (
    <Box cssx={{ bg: "grey.bg" }}>
      <Element
        as="img"
        alt=""
        src="support-top-notch.png"
        cssx={{
          // @ts-ignore
          ml: "auto", mt: - 29, pos: "relative", display: { _: "none", tablet: "block" },
        }}
      />
      <Flex align="center" cssx={{ pt: 100, pb: 60 }}>
        {/*
         // @ts-ignore */}
        <Box cssx={{ w: 1 / 2, mt: 60, display: { _: "none", desktop: "block" } }}>
          <PrismicImage node={data.support_image_desktop} cssx={{ ml: "auto", maxWidth: 800 }} />
        </Box>

        <Flex direction="column" justify="center" cssx={{ mx: { _: "auto", desktop: 0 }, ml: { desktop: - 50 } }}>
          <Box cssx={{ maxWidth: 550, textAlign: { _: "center", desktop: "left" } }}>
            <H2 cssx={{ mb: { _: 50, desktop: 40 } }} richText>
              {data.support_title}
            </H2>
            <Button as="a" href="https://help.coinmetro.com/en/" variant="yellow" cssx={{ fontSize: 20 }}>
              {data.string_start_a_chat}
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/*
       // @ts-ignore */}
      <Box cssx={{ mt: - 20, pb: 60, display: { _: "none", phablet: "block", desktop: "none" } }}>
        <PrismicImage node={data.support_image_tablet} />
      </Box>
      {/*
       // @ts-ignore */}
      <Box cssx={{ mt: - 20, display: { phablet: "none" } }}>
        <PrismicImage node={data.support_image_mobile} />
      </Box>
      <Container>
        <Box cssx={{ pb: 60, textAlign: "center" }}>
          <H3 cssx={{ mb: 60 }}>
            We Care About our Clients
          </H3>
          <TrustBox />
        </Box>
      </Container>
    </Box>
  )
}
