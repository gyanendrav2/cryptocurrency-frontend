import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { wecareStyle } from "./cssxStyle/wecare"
import { Container } from "../../ui/Container"

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
function WeCare() {
  return (
    <Box cssx={wecareStyle.trustWrapper}>
      <Element
        as="img"
        src="/career/rightJob_bottomCurve.svg"
        cssx={wecareStyle.trustBottomcurve}
        alt="career bottom curve"
      />
      <Container>
        <Flex align="center" direction="column" cssx={{ textAlign: "center", mb: "4rem" }}>
          <Element as="h1" cssx={wecareStyle.heading}>
            We care about our clients
          </Element>
        </Flex>
        <TrustBox />
      </Container>
    </Box>
  )
}

export default WeCare
