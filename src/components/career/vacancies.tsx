import { Box, CssxObject, Element, Flex } from "@react-cssx/core"
import React, { ReactElement } from "react"
import { useRouter } from "next/dist/client/router"
import { Container } from "../../ui/Container"
import { vacanciesStyle } from "./cssxStyle/vacancies"
import { Button } from "../../ui/Button"
import MobileVacancies from "./mobielvacancies"

interface VacanciesProps {
  heading: string
  buttonText: string
  postionHeading?: CssxObject
  showBtnCurve?: boolean
  bg?: string
  hideTopCurve?: boolean
  link?: string
  colColor?: string
}

export default function Vacancies({
  heading,
  postionHeading,
  buttonText,
  showBtnCurve,
  bg,
  hideTopCurve,
  link,
  colColor,
}: VacanciesProps): ReactElement {
  const route = useRouter()
  return (
    <>
      <Box
        cssx={{
          pos: "relative",
          transform: "translateY(-5px)",
          backgroundColor: bg,
          display: "none",
          "@mq": {
            tablet: {
              display: "block",
            },
          },
        }}
      >
        <Flex align="center" justify="center">
          <Element as="h1" cssx={{ ...vacanciesStyle.heading, ...postionHeading }}>
            {heading}
          </Element>
        </Flex>
        {!hideTopCurve && (
          <Element as="img" src="/career/aboutcurve.svg" cssx={vacanciesStyle.curve} alt="curve" />
        )}
        <Container>
          <Box>
            <Element as="table" cssx={vacanciesStyle.table}>
              <tbody>
                <tr>
                  <Element
                    as="th"
                    cssx={{
                      ...vacanciesStyle.tableCol,
                      "@mq": {
                        desktop: {
                          backgroundColor: colColor,
                        },
                      },
                    }}
                  >
                    ROLE
                  </Element>
                  <Element
                    as="th"
                    cssx={{
                      ...vacanciesStyle.tableCol,
                      "@mq": {
                        desktop: {
                          backgroundColor: colColor,
                        },
                      },
                    }}
                  >
                    DEPARTMENT
                  </Element>
                  <Element
                    as="th"
                    cssx={{
                      ...vacanciesStyle.tableCol,
                      width: "36%",
                      "@mq": {
                        desktop: {
                          backgroundColor: colColor,
                        },
                      },
                    }}
                  >
                    LOCATION
                  </Element>
                </tr>
                <tr>
                  <td colSpan={3}>&nbsp;</td>
                </tr>

                <tr className="dataRow" onClick={() => route.push("/job-information")}>
                  <td>Senior UI/UX Designer</td>
                  <td>Design</td>
                  <td>
                    <p style={{ float: "left" }}>Remote</p>
                    <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
                  </td>
                </tr>
                <tr className="tableSpacing">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="dataRow" onClick={() => route.push("/job-information")}>
                  <td>Freelance Email Associate Editor (Part time) </td>
                  <td>Business department</td>
                  <td>
                    <p style={{ float: "left" }}>Tallinn, Estonia</p>
                    <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
                  </td>
                </tr>
                <tr className="tableSpacing">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="dataRow" onClick={() => route.push("/job-information")}>
                  <td>Senior UI/UX Designer</td>
                  <td>Design</td>
                  <td>
                    <p style={{ float: "left" }}>Remote</p>
                    <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
                  </td>
                </tr>
                <tr className="tableSpacing">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="dataRow" onClick={() => route.push("/job-information")}>
                  <td>Senior UI/UX Designer</td>
                  <td>Design</td>
                  <td>
                    <p style={{ float: "left" }}>Remote</p>
                    <Element cssx={{ float: "right" }} as="img" src="/career/arrowRight.svg" />
                  </td>
                </tr>
              </tbody>
            </Element>
          </Box>
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
              onClick={() => route.push(link)}
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
      <MobileVacancies
        bg={bg}
        hideTopCurve
        showBtnCurve={showBtnCurve}
        heading={heading}
        buttonText={buttonText}
      />
    </>
  )
}

Vacancies.defaultProps = {
  postionHeading: {},
  showBtnCurve: false,
  bg: "grey.light4",
  hideTopCurve: false,
  link: "",
  colColor: "",
}
