import React, { useState, ReactElement } from "react"
import { Box, CssxObject, Element, Flex } from "@react-cssx/core"
import { rightjobStyle } from "./cssxStyle/rightjobStyle"
import { Button } from "../../ui/Button"
import Modal from "../career/modal"
import { Application } from "../career/application"

export interface RightjobProps {
  jobInfoPage?: boolean
  title: string
  img: string
  imgCssx?: CssxObject
}

function RightJob({ jobInfoPage, title, img, imgCssx }: RightjobProps): ReactElement {
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
            {title}
          </Element>
          <Button
            variant="yellow"
            cssx={{
              px: 42,
              py: 20,
              mb: { _: " ", tablet: "7rem", desktop: "12.187rem" },
              textAlign: "center",
              verticalAlign: "middle",
              zIndex: 5,
            }}
            onClick={() => setModal(true)}
          >
            {jobInfoPage ? "Send us a message" : "Apply anyway"}
          </Button>
          <Element
            as="img"
            src={img}
            style={rightjobStyle.image as any}
            cssx={imgCssx}
            alt="World map"
          />
        </Flex>
      </Box>
    </>
  )
}

RightJob.defaultProps = {
  jobInfoPage: false,
  imgCssx: {},
}

export default RightJob
