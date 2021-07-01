import React from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { rightjobStyle } from "./cssxStyle/rightjobStyle"
import { Button } from "../../ui/Button"

function RightJob() {
  return (
    <Box cssx={rightjobStyle.joinWrapper}>
      <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
        <Element as="h1" cssx={rightjobStyle.heading}>
          Did not find the right job?
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
          Apply anyway
        </Button>
        <Element
          as="img"
          src="/career/world_map.svg"
          style={rightjobStyle.image as any}
          alt="World map"
        />
      </Flex>
    </Box>
  )
}

export default RightJob
