import { Box, Element, Flex } from "@react-cssx/core"
import React from "react"
import { Container } from "../../ui/Container"
import { vacanciesStyle } from "./cssxStyle/vacancies"
import { Button } from "../../ui/Button"

export default function Vacancies() {
  const classes = vacanciesStyle
  return (
    <Box cssx={classes.wrapper}>
      <Flex align="center" justify="center">
        <Element as="h1" cssx={classes.heading}>
          Current vacancies
        </Element>
      </Flex>
      <Element as="img" src="/career/aboutcurve.svg" cssx={classes.curve} alt="curve" />
      <Container>
        <Box>
          <Element as="table" cssx={classes.table}>
            <tbody>
              <tr>
                <th
                  style={{
                    backgroundColor: "transparent",
                    paddingTop: "1.875rem",
                    paddingBottom: "1.875rem",
                  }}
                >
                  ROLE
                </th>
                <th
                  style={{
                    backgroundColor: "transparent",
                    paddingTop: "1.875rem",
                    paddingBottom: "1.875rem",
                  }}
                >
                  DEPARTMENT
                </th>
                <th
                  style={{
                    backgroundColor: "transparent",
                    paddingTop: "1.875rem",
                    paddingBottom: "1.875rem",
                  }}
                >
                  LOCATION
                </th>
              </tr>

              <tr className="dataRow">
                <td>Senior UI/UX Designer</td>
                <td>Design</td>
                <td>Remote</td>
              </tr>
              <tr className="tableSpacing">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="dataRow">
                <td>Freelance Email Associate Editor (Part time) </td>
                <td>Business department</td>
                <td>Tallinn, Estonia</td>
              </tr>
              <tr className="tableSpacing">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="dataRow">
                <td>Senior UI/UX Designer</td>
                <td>Design</td>
                <td>Remote</td>
              </tr>
              <tr className="tableSpacing">
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="dataRow">
                <td>Senior UI/UX Designer</td>
                <td>Design</td>
                <td>Remote</td>
              </tr>
            </tbody>
          </Element>
        </Box>
        <Flex align="center" justify="center">
          <Button
            variant="purple"
            cssx={{ bg: "purple.dark", w: "14.687rem", textAlign: "center", mt: 74, mb: 104 }}
          >
            View all positions
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
