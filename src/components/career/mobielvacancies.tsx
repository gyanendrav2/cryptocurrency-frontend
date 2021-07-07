import { Box, CssxObject, Element, Flex } from "@react-cssx/core"
import React, { ReactElement } from "react"
// import { useRouter } from "next/dist/client/router"
import { Container } from "../../ui/Container"
import { vacanciesStyle } from "./cssxStyle/vacancies"
import { Button } from "../../ui/Button"

interface MobileVacanciesProps {
  heading: string
  buttonText: string
  // postionHeading?: CssxObject
  showBtnCurve?: boolean
  bg?: string
  hideTopCurve?: boolean
}

export default function MobileVacancies({
  heading,
  buttonText,
  showBtnCurve,
  bg,
  hideTopCurve,
}: MobileVacanciesProps): ReactElement {
  // const route = useRouter()
  return (
    <>
      <Box
        cssx={{
          pos: "relative",
          transform: "translateY(-5px)",
          backgroundColor: bg,
          display: "block",
          "@mq": {
            tablet: {
              display: "none",
            },
          },
        }}
      >
        <Flex align="center" justify="center">
          <Element as="h1" cssx={{ ...vacanciesStyle.heading }}>
            {heading}
          </Element>
        </Flex>
        {hideTopCurve ? (
          " "
        ) : (
          <Element as="img" src="/career/aboutcurve.svg" cssx={vacanciesStyle.curve} alt="curve" />
        )}
        <Container>
          <Flex
            cssx={{ bg: "white", borderRadius: "9px", mb: "0.5rem" }}
            align="center"
            justify="space-around"
          >
            <Box cssx={{ p: "1.5rem 2rem" }}>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "grey.light3",
                  opacity: "0.6",
                  mb: "0.5rem",
                }}
              >
                Remote
              </Element>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "grey.light3",
                  mb: "0.5rem",
                }}
              >
                Senior UI/UX Designer
              </Element>
              <Element
                as="p"
                cssx={{ fontWeight: "bold", fontSize: "1rem", color: "grey.dark3", mb: "0.5rem" }}
              >
                Design department
              </Element>
            </Box>
            <Box>
              <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
            </Box>
          </Flex>
          <Flex
            cssx={{ bg: "white", borderRadius: "9px", mb: "0.5rem" }}
            align="center"
            justify="space-around"
          >
            <Box cssx={{ p: "1.5rem 2rem" }}>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "grey.light3",
                  opacity: "0.6",
                  mb: "0.5rem",
                }}
              >
                Remote
              </Element>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "grey.light3",
                  mb: "0.5rem",
                }}
              >
                Senior UI/UX Designer
              </Element>
              <Element
                as="p"
                cssx={{ fontWeight: "bold", fontSize: "1rem", color: "grey.dark3", mb: "0.5rem" }}
              >
                Design department
              </Element>
            </Box>
            <Box>
              <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
            </Box>
          </Flex>
          <Flex
            cssx={{ bg: "white", borderRadius: "9px", mb: "0.5rem" }}
            align="center"
            justify="space-around"
          >
            <Box cssx={{ p: "1.5rem 2rem" }}>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "grey.light3",
                  opacity: "0.6",
                  mb: "0.5rem",
                }}
              >
                Remote
              </Element>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "grey.light3",
                  mb: "0.5rem",
                }}
              >
                Senior UI/UX Designer
              </Element>
              <Element
                as="p"
                cssx={{ fontWeight: "bold", fontSize: "1rem", color: "grey.dark3", mb: "0.5rem" }}
              >
                Design department
              </Element>
            </Box>
            <Box>
              <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
            </Box>
          </Flex>
          <Flex
            cssx={{ bg: "white", borderRadius: "9px", mb: "0.5rem" }}
            align="center"
            justify="space-around"
          >
            <Box cssx={{ p: "1.5rem 2rem" }}>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "grey.light3",
                  opacity: "0.6",
                  mb: "0.5rem",
                }}
              >
                Remote
              </Element>
              <Element
                as="p"
                cssx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "grey.light3",
                  mb: "0.5rem",
                }}
              >
                Senior UI/UX Designer
              </Element>
              <Element
                as="p"
                cssx={{ fontWeight: "bold", fontSize: "1rem", color: "grey.dark3", mb: "0.5rem" }}
              >
                Design department
              </Element>
            </Box>
            <Box>
              <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
            </Box>
          </Flex>
          <Flex align="center" justify="center">
            <Button
              variant="purple"
              cssx={{
                bg: "purple.dark",
                w: "14.687rem",
                textAlign: "center",
                mt: { _: "1.5rem", tablet: "2rem", desktop: "4.625rem" },
                mb: { _: "2rem", tablet: "2.5rem", desktop: "6.5rem" },
                cursor: "pointer",
              }}
            >
              {buttonText}
            </Button>
          </Flex>
        </Container>
        {showBtnCurve && (
          <Element
            as="img"
            src="/career/rightJob_topCurve.svg"
            cssx={{
              pos: "absolute",
              bottom: -5,
              left: 0,
              right: 0,
              width: "100%",
            }}
            alt="rightJob-top-curve"
          />
        )}
      </Box>
    </>
  )
}

MobileVacancies.defaultProps = {
  postionHeading: {},
  showBtnCurve: false,
  bg: "grey.light4",
  hideTopCurve: false,
}
