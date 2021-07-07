import React, { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Flex, Element, Box } from "@react-cssx/core"
import { useForm } from "react-hook-form"
import { applicationStyle } from "./cssxStyle/application"
import InputField from "../inputs/inputField"
import TextAreaField from "../inputs/textAreaField"
import { Button } from "../../ui/Button"
import Modal from "./modal"
import { applicationFormValidation } from "../../helper/applicationFormValidation"

interface Props {
  // eslint-disable-next-line react/require-default-props
  onClose?: () => void
  heading: string
  closeBtn?: boolean
}

export function Application({ onClose, heading, closeBtn }: Props): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(applicationFormValidation),
  })
  const [modal, setModal] = useState(false)

  const onSubmit = (data) => {
    setModal(true)
    console.log(data)
    setTimeout(() => {
      setModal(false)
    }, 2000)
  }

  return (
    <>
      {modal && (
        <Modal>
          <Flex
            align="center"
            justify="center"
            cssx={{ w: "20rem", borderRadius: 5, bg: "green", height: "10rem" }}
          >
            <Element as="p" cssx={{ color: "something", ml: 16 }}>
              Application sucessfully submitted!
            </Element>
          </Flex>
        </Modal>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex cssx={applicationStyle.wrapper} direction="column">
          {closeBtn && (
            <Element
              as="img"
              src="/career/close.svg"
              cssx={applicationStyle.closeIcon}
              onClick={onClose}
            />
          )}
          <Element as="h1" cssx={applicationStyle.heading}>
            {heading}
          </Element>
          <InputField
            placeholder="Name*"
            name="name"
            required
            errorMsg={(errors as any)?.name?.message}
            inputRef={register}
            onChange={(e) => console.log(e)}
          />
          <InputField
            placeholder="Email*"
            name="email"
            errorMsg={(errors as any)?.email?.message}
            required
            inputRef={register}
          />
          <InputField
            placeholder="Phone number*"
            errorMsg={(errors as any)?.phoneNumber?.message}
            name="phoneNumber"
            required
            inputRef={register}
          />
          <InputField placeholder="LinkedIn URL" name="linkedInURL" inputRef={register} />
          <TextAreaField
            placeholder="Why do you want to join the team"
            name="teamJoinReson"
            inputRef={register}
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
              type="submit"
            >
              Apply Now
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  )
}

Application.defaultProps = {
  onClose: () => {},
  closeBtn: false,
}
