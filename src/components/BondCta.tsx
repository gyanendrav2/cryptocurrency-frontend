import React, { ReactElement, useEffect, useState } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import Cookies from "js-cookie"
import { Button } from "../ui/Button"

export function BondCta({ data }: {data: any}): ReactElement {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (Cookies.get("cta_bond") !== "1") {
      setHidden(false)
    }
  }, [])

  const hideCta = () => {
    Cookies.set("cta_bond", 1, { expires: 5 })
    setHidden(true)
  }

  if (hidden) {
    return null
  }

  return (
    <Box cssx={{
      pos: "fixed",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 500,
      maxWidth: 250,
      width: "full",
      "@mq": {
        tablet: {
          maxWidth: 500,
        },
        desktop: {
          maxWidth: 650,
        },
      },
    }}
    >
      <Flex
        cssx={{
          color: "white",
          bg: "grey.dark",
          minHeight: 64,
          borderRadius: 50,
          minWidth: { _: 250, tablet: 400 },
          pos: "relative",
          "@mq": {
            tablet: {
              borderRadius: 9999,
            },
          },
        }}
        align="center"
        justify={{ _: "center", tablet: "unset" }}
        direction={{ _: "column", tablet: "row" }}
        wrap="wrap"
      >

        <Flex
          cssx={{
            pos: "absolute",
            top: 0,
            right: - 30,
            bg: "grey.dark",
            borderRadius: "100%",
            color: "yellow.dark",
            h: 24,
            w: 24,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          align="center"
          justify="center"
          onClick={hideCta}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9" stroke="#FFCE47" strokeWidth="2" />
            <path d="M9 1L1 9" stroke="#FFCE47" strokeWidth="2" />
          </svg>
        </Flex>

        <Box cssx={{
          my: 16,
          "@mq": {
            tablet: {
              p: 16,
              my: "unset",
            },
            desktop: {
              p: 8,
            },
          },
        }}
        >
          <Element
            as="svg"
            cssx={{
              h: 50,
              w: 50,
            }}
            // @ts-ignore
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="#165179" />
            <path d="M47.1106 30.0411L30.5382 7.17168V5.39634C30.5358 4.96189 30.4153 4.53665 30.1901 4.16795C29.9649 3.79924 29.6439 3.50153 29.2628 3.30794C28.8869 3.1108 28.469 3.01176 28.0464 3.01966C27.6238 3.02757 27.2097 3.14218 26.8411 3.35325L6.22053 15.1587C5.88745 15.3392 5.60843 15.6084 5.41302 15.9376C5.21762 16.2668 5.11312 16.6439 5.1106 17.0288L5.1106 31.8576C5.11168 32.5972 5.34855 33.3163 5.78543 33.9063C6.22231 34.4963 6.83547 34.9252 7.53228 35.1282L47.0864 46.9995L47.1106 30.0411Z" fill="#FFCE47" />
            <path d="M47.1106 30.0411L30.5382 7.17168V5.39634C30.5358 4.96189 30.4153 4.53665 30.1901 4.16795C29.9649 3.79924 29.6439 3.50153 29.2628 3.30794C28.8869 3.1108 28.469 3.01176 28.0464 3.01966C27.6238 3.02757 27.2097 3.14218 26.8411 3.35325L6.22053 15.1587C5.88688 15.3385 5.60738 15.6075 5.41188 15.9369C5.21639 16.2663 5.11225 16.6437 5.1106 17.0288V24.2084L47.1106 37.7068V30.0411Z" fill="#E2AE39" />
            <path d="M47.1106 30.0421L30.5382 7.17267L10.0266 18.9081L47.1106 30.0421Z" fill="#6764A0" />
            <path d="M7.87527 14.9697C8.48808 15.1371 9.03024 15.5049 9.41876 16.0168C9.80729 16.5286 10.0208 17.1562 10.0265 17.8036V18.9076L30.5382 7.17217V5.39683C30.5357 4.96238 30.4152 4.53714 30.19 4.16844C29.9648 3.79973 29.6438 3.50202 29.2627 3.30843C28.8868 3.11129 28.4689 3.01225 28.0463 3.02015C27.6237 3.02806 27.2097 3.14267 26.8411 3.35374L6.22046 15.1592C6.72642 14.8771 7.32065 14.8091 7.87527 14.9697Z" fill="#7D7DB7" />
            <path d="M5.1106 26.7962L47.1106 40.2987V44.1913L5.1106 30.5982V26.7962Z" fill="#E2AE39" />
            <path d="M24.9361 3C24.9361 3 16.7468 5.98637 16.7468 12.3504C16.7468 18.7145 27.4305 19.3076 29.0651 14.1216C30.3405 10.0478 26.0985 9.62356 24.9361 3Z" fill="#9F9FCE" />
            <path d="M22.135 12.5317C22.2279 15.2585 23.3822 16.7126 24.5971 17.4746C23.3884 17.6822 22.1504 17.6261 20.9645 17.3099C20.2063 16.3379 19.6805 15.199 19.429 13.9834C19.1774 12.7678 19.2071 11.5092 19.5156 10.3073C20.4479 6.42712 24.9361 3 24.9361 3C24.9361 3 21.9373 6.63719 22.135 12.5317Z" fill="#54518C" />
            <path d="M27.2286 10.6616C28.0901 11.299 28.7925 12.1343 29.279 13.1001C29.2423 13.4472 29.1706 13.7896 29.0651 14.1216C28.9043 14.6271 28.6509 15.0967 28.3184 15.5057C27.7937 13.3637 25.2993 11.7985 24.2822 9.86247C23.1037 7.60931 24.9361 3 24.9361 3C24.4437 5.05956 25.0007 8.878 27.2286 10.6616Z" fill="#54518C" />
            <path d="M37.884 14.1958L32.3666 11.23L26.8452 14.1958V20.84L32.3666 23.8057L37.884 20.84V14.1958Z" fill="#69D5DD" />
            <path d="M37.884 14.1958L32.3666 17.1575L26.8452 14.1958L32.3666 11.23L37.884 14.1958Z" fill="#86ECEF" />
            <path d="M32.3665 17.1575V23.8057L37.8838 20.84V14.1958L32.3665 17.1575Z" fill="#56BFC1" />
            <path d="M35.5874 10.3732C35.5874 11.209 35.2621 12.0105 34.683 12.6014C34.104 13.1924 33.3186 13.5244 32.4998 13.5244C31.6809 13.5244 30.8955 13.1924 30.3165 12.6014C29.7374 12.0105 29.4121 11.209 29.4121 10.3732C29.4121 9.53751 29.7374 8.736 30.3165 8.14505C30.8955 7.5541 31.6809 7.22211 32.4998 7.22211C33.3186 7.22211 34.104 7.5541 34.683 8.14505C35.2621 8.736 35.5874 9.53751 35.5874 10.3732Z" fill="#B985DD" />
          </Element>

        </Box>
        <Box cssx={{
          mx: 16,
          flex: 1,
          textAlign: "center",
          "@mq": {
            tablet: {
              textAlign: "left",
              p: 8,
            },
          },
        }}
        >
          {data.string_coinmetro_bond}
        </Box>
        <Box cssx={{
          my: 32,
          "@mq": {
            tablet: {
              p: 16,
              my: "unset",
            },
            desktop: {
              p: 8,
            },
          },
        }}
        >
          <Button
            as="a"
            href="https://coinmetro.com/blog/coinmetro-bond-sold-out/"
            variant="yellow"
            cssx={{
              py: 14,
              fontSize: 16,
            }}
          >
            {data.string_invest_now}
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
