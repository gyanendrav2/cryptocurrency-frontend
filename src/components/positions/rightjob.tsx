import React, { useState, ReactElement } from "react"
import { Box, CssxObject, Element, Flex } from "@react-cssx/core"
import { rightjobStyle } from "./cssxStyle/rightjobStyle"
import { Button } from "../../ui/Button"
import Modal from "../career/modal"
import { Application } from "../career/application"

export interface RightjobProps {
  // jobInfoPage?: boolean
  title: string
  img: string
  imgCssx?: CssxObject
  btnText: string
}

function RightJob({ title, img, imgCssx, btnText }: RightjobProps): ReactElement {
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
              px: 22,
              py: 16,
              mb: { _: " ", tablet: "7rem", desktop: "12.187rem" },
              textAlign: "center",
              verticalAlign: "middle",
              zIndex: 5,
              marginBottom: 68,
              "@mq": {
                tablet: {
                  px: 22,
                  py: 16,
                  marginBottom: 80,
                },
                desktop: {
                  marginBottom: 195,
                  px: 42,
                  py: 20,
                },
              },
            }}
            onClick={() => setModal(true)}
          >
            {btnText}
          </Button>
          <Element
            as="img"
            src={img}
            cssx={{ ...imgCssx, ...rightjobStyle.image }}
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
