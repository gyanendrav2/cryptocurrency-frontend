import React, { useState } from "react"
import { Box, Flex, Element } from "@react-cssx/core"
import { modalStyle } from "./cssxStyle/modal"
import InputField from "../inputs/inputField"
import TextAreaField from "../inputs/textAreaField"
import { Button } from "../../ui/Button"

interface Props {
  onClose: () => void
}

export default function Modal({ onClose }: Props): React.ReactElement {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    linkedinUrl: "",
  })
  const handleInput = (e: any, label: string) => {
    const data = { ...form }
    data[label] = e.target.value
    setForm(data)
  }

  return (
    <Flex
      align="center"
      justify="center"
      cssx={{
        height: "100vh",
        pos: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      <Box cssx={modalStyle.wrapper}>
        <Element as="img" src="/career/close.svg" cssx={modalStyle.closeIcon} onClick={onClose} />
        <Element as="h1" cssx={modalStyle.heading}>
          Let’s talk!
        </Element>
        <InputField placeholder="Name*" onChange={(e) => handleInput(e, "name")} />
        <InputField placeholder="Email*" onChange={(e) => handleInput(e, "email")} />
        <InputField placeholder="Phone number*" onChange={(e) => handleInput(e, "phoneNumber")} />
        <InputField placeholder="LinkedIn URL" onChange={(e) => handleInput(e, "linkedinUrl")} />
        <TextAreaField placeholder="LinkedIn URL" onChange={(e) => handleInput(e, "linkedinUrl")} />
        <Button variant="purple" cssx={{ w: "100%", borderRadius: 4, textAlign: "center" }}>
          Upload Your CV
          <Element
            as="img"
            src="/career/uploadIcon.svg"
            cssx={{ display: "inline-block", ml: "1rem" }}
          />
        </Button>
        <Flex align="center" wrap="nowrap" cssx={{ my: 32 }}>
          <Element as="img" src="/career/checkbox.svg" alt="checkbox" />
          <Element as="p" cssx={{ color: "purple.default", ml: 16 }}>
            I agree to the recruitment policy
          </Element>
        </Flex>
        <Flex align="center" justify="center">
          <Button variant="purple" cssx={{ w: 235, textAlign: "center", bg: "purple.dark" }}>
            Apply Now
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
