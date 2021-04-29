import { Element, Flex } from "@react-cssx/core"
import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { faqData } from "../../data/faq"
import "react-accessible-accordion/dist/fancy-example.css"
import { Container } from "../../ui/Container"

export default function Faq() {
  return (
    <>
      <Container
        cssx={{
          pb: 48,
          "@mq": {
            tablet: {
              pb: 110,
            },
          },
        }}
      >
        <Element
          as="h1"
          cssx={{
            color: "purple.default",
            fontWeight: 800,
            fontSize: "32px",
            lineHeight: "40px",
            textAlign: "center",
            mb: "2rem",
            "@mq": {
              tablet: {
                fontSize: "48px",
                lineHeight: "56px",
                mb: "4rem",
              },
            },
          }}
        >
          FAQ
        </Element>
        <Accordion allowMultipleExpanded allowZeroExpanded style={{ backgroundColor: "#F7F8FA" }}>
          {faqData?.map((item: any) => (
            <AccordionItem key={item}>
              <AccordionItemHeading
                style={{
                  border: "none!important",
                }}
              >
                <AccordionItemButton
                  style={{
                    backgroundColor: "#F7F8FA!important",
                    borderBottom: "1px solid #CACFE3",
                    color: "#635C99",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  <Flex>
                    {item.heading}
                    {/* <Element as="img" src="affiliates/arrowUp.svg" alt="Arrow bottom" /> */}
                  </Flex>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.content}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </>
  )
}
