import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { joinStyle } from "./cssxStyle/join"
import { Button } from "../../ui/Button"

function CareerJoin() {
  return (
    <Box cssx={joinStyle.joinWrapper}>
      <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
        <Element as="h1" cssx={joinStyle.heading}>
          Are you ready to join
        </Element>
        <Button
          as="a"
          href=""
          variant="yellow"
          cssx={{
            px: 42,
            py: 20,
            mb: "12.187rem",
            textAlign: "center",
            verticalAlign: "middle",
            zIndex: 5,
          }}
        >
          view all positions
        </Button>
        <Element
          as="img"
          src="/career/join_lightBlue.svg"
          style={joinStyle.image as any}
          alt="join blue star"
        />
        <Element
          as="img"
          src="/career/join_bottomCurve.svg"
          cssx={joinStyle.joinBottomcurve}
          alt="career bottom curve"
        />
      </Flex>
    </Box>
  )
}

export default CareerJoin
