import React, { useState } from "react"
import { Box, Element, Flex } from "@react-cssx/core"
import { rightjobStyle } from "./cssxStyle/rightjobStyle"
import { Button } from "../../ui/Button"
import Modal from "../career/modal"
import { Application } from "../career/application"

function RightJob() {
  const [modal, setModal] = useState(false)
  return (
    <>
      {modal && (
        <Modal>
          <Application heading="Lets talk!" closeBtn onClose={() => setModal(false)} />
        </Modal>
      )}
      <Box cssx={rightjobStyle.joinWrapper}>
        <Flex align="center" direction="column" cssx={{ textAlign: "center" }}>
          <Element as="h1" cssx={rightjobStyle.heading}>
            Did not find the right job?
          </Element>
          <Button
            variant="yellow"
            cssx={{
              px: 42,
              py: 20,
              mb: "12.187rem",
              textAlign: "center",
              verticalAlign: "middle",
              zIndex: 5,
            }}
            onClick={() => setModal(true)}
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
    </>
  )
}

export default RightJob
