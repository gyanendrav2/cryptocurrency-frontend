import React from "react"
import { Flex, Element } from "@react-cssx/core"
import { trustStyle } from "../career/cssxStyle/trust"

export default function SocialShareCard() {
  return (
    <>
      <Flex
        align="flex-end"
        direction="column"
        cssx={{ mt: { _: "2rem", desktop: "7.187rem" }, mb: "5.25rem" }}
      >
        <Element
          as="p"
          cssx={{ fontWeight: "bold", fontSize: "1rem", color: "grey.dark3", mb: "1rem" }}
        >
          Share this position
        </Element>
        <Flex cssx={{ mr: "-1rem" }}>
          <Element as="a" href="#" target="_blank" rel="noopener noreferrer">
            <Element
              as="img"
              src="/career/icon_facebook.svg"
              alt="icon_facebook"
              cssx={trustStyle.icon}
            />
          </Element>
          <Element as="a" href="#" target="_blank" rel="noopener noreferrer">
            <Element as="img" src="/career/icon_twitter.svg" alt="twitter" cssx={trustStyle.icon} />
          </Element>
          <Element as="a" href="#" target="_blank" rel="noopener noreferrer">
            <Element
              as="img"
              src="/career/icon_linkedin.svg"
              alt="linkedin"
              cssx={trustStyle.icon}
            />
          </Element>
          <Element as="a" href="#" target="_blank" rel="noopener noreferrer">
            <Element
              as="img"
              src="/career/icon_subtract.svg"
              alt="subtract"
              cssx={trustStyle.icon}
            />
          </Element>
        </Flex>
      </Flex>
    </>
  )
}
