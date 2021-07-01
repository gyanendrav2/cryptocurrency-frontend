import { Box, Element, Flex } from "@react-cssx/core"
import React, { ReactElement, useState } from "react"
import { useRouter } from "next/dist/client/router"
import { Container } from "../../ui/Container"
import { vacanciesStyle } from "./cssxStyle/vacancies"
import { Button } from "../../ui/Button"
import Modal from "./modal"

interface VacanciesProps {
  heading: string
  hidePosBtn?: boolean
  postionHeading?: boolean
  showBtnCurve?: boolean
}

export default function Vacancies({
  heading,
  hidePosBtn,
  postionHeading,
  showBtnCurve,
}: VacanciesProps): ReactElement {
  const route = useRouter()
  const [modal, setModal] = useState(false)
  return (
    <>
      <Box cssx={vacanciesStyle.wrapper}>
        <Flex align="center" justify="center">
          <Element
            as="h1"
            cssx={postionHeading ? vacanciesStyle.postionHeading : vacanciesStyle.heading}
          >
            {heading}
          </Element>
        </Flex>
        <Element as="img" src="/career/aboutcurve.svg" cssx={vacanciesStyle.curve} alt="curve" />
        <Container>
          <Box>
            <Element as="table" cssx={vacanciesStyle.table}>
              <tbody>
                <tr>
                  <th
                    style={{
                      backgroundColor: "transparent",
                      paddingTop: "1.875rem",
                      paddingBottom: "1.875rem",
                      width: "32%",
                    }}
                  >
                    ROLE
                  </th>
                  <th
                    style={{
                      backgroundColor: "transparent",
                      paddingTop: "1.875rem",
                      paddingBottom: "1.875rem",
                      width: "32%",
                    }}
                  >
                    DEPARTMENT
                  </th>
                  <th
                    style={{
                      backgroundColor: "transparent",
                      paddingTop: "1.875rem",
                      paddingBottom: "1.875rem",
                      width: "36%",
                    }}
                  >
                    LOCATION
                  </th>
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
            {hidePosBtn ? (
              <Button
                variant="purple"
                cssx={{ bg: "purple.dark", w: "14.687rem", textAlign: "center", mt: 74, mb: 104 }}
                onClick={() => {
                  setModal(true)
                }}
              >
                Load more
              </Button>
            ) : (
              <Button
                variant="purple"
                cssx={{ bg: "purple.dark", w: "14.687rem", textAlign: "center", mt: 74, mb: 104 }}
                onClick={() => route.push("/positions")}
              >
                View all positions
              </Button>
            )}
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
      {!modal && <Modal onClose={() => setModal(false)} />}
    </>
  )
}

Vacancies.defaultProps = {
  hidePosBtn: false,
  postionHeading: false,
  showBtnCurve: false,
}
