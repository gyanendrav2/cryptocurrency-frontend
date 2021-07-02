import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { useRouter } from "next/dist/client/router"
import { joinStyle } from "./cssxStyle/join"
import { Button } from "../../ui/Button"

function CareerJoin() {
  const route = useRouter()
  return (
    <>
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
            onClick={() => route.push("./available-positions")}
          >
            view all positions
          </Button>
          <Element
            as="img"
            src="/career/join_lightBlue.svg"
            style={joinStyle.image as any}
            alt="blue star"
          />
        </Flex>
        <Element
          as="img"
          src="/career/join_bottomCurve.svg"
          cssx={joinStyle.trustBottomcurve}
          alt="career bottom curve"
        />
      </Box>
    </>
  )
}

export default CareerJoin
