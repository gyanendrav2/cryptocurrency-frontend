import React, { useState } from "react"
import { Flex, Element } from "@react-cssx/core"
import { useForm } from "react-hook-form"
import { applicationStyle } from "./cssxStyle/application"
import InputField from "../inputs/inputField"
import TextAreaField from "../inputs/textAreaField"
import { Button } from "../../ui/Button"

interface Props {
  // eslint-disable-next-line react/require-default-props
  onClose?: () => void
  heading: string
}

export function Application({ onClose, heading }: Props): React.ReactElement {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    linkedinUrl: "",
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const handleInput = (e: any, label: string) => {
    const data = { ...form }
    data[label] = e.target.value
    setForm(data)
  }

  // const [modal, setModal] = useState(false)

  return (
    <Flex cssx={applicationStyle.wrapper} direction="column" onSubmit={handleSubmit(onSubmit)}>
      {/* {"modal" && (
        <Element
          as="img"
          src="/career/close.svg"
          cssx={applicationStyle.closeIcon}
          onClick={onClose}
        />
      )} */}
      <Element as="h1" cssx={applicationStyle.heading}>
        {heading}
      </Element>
      <InputField
        placeholder="Name*"
        onChange={(e) => handleInput(e, "name")}
        {...register("Name")}
      />
      <InputField placeholder="Email*" onChange={(e) => handleInput(e, "email")} />
      <InputField placeholder="Phone number*" onChange={(e) => handleInput(e, "phoneNumber")} />
      <InputField placeholder="LinkedIn URL" onChange={(e) => handleInput(e, "linkedinUrl")} />
      <TextAreaField
        placeholder="Why do you want to join the team"
        onChange={(e) => handleInput(e, "whyJointeam")}
      />
      <Button
        variant="purple"
        cssx={{ w: "100%", borderRadius: 4, textAlign: "center", mt: "1rem" }}
      >
        Upload Your CV
        <Element
          as="img"
          src="/career/uploadIcon.svg"
          cssx={{ display: "inline-block", ml: "1rem" }}
        />
      </Button>
      <Flex align="center" wrap="nowrap" cssx={{ my: 32, ml: 16 }}>
        <Element as="img" src="/career/checkbox.svg" alt="checkbox" />
        <Element as="p" cssx={{ color: "purple.default", ml: 16 }}>
          I agree to the recruitment policy
        </Element>
      </Flex>
      <Flex align="center" justify="center">
        <Button
          variant="purple"
          cssx={{ w: 235, textAlign: "center", bg: "purple.dark", mb: "3rem" }}
          onClick={() => setModal(true)}
        >
          Apply Now
        </Button>
      </Flex>
    </Flex>
  )
}

Application.defaultProps = {
  // onClose: () => void
}
