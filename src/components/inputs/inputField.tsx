import { Element } from "@react-cssx/core"
import React from "react"

interface Props {
  placeholder?: string
  onChange?: (e: any) => void
  name?: string
  inputRef: any
  required?: boolean
  errorMsg?: string
}

function InputField({
  placeholder,
  name,
  inputRef,
  required,
  errorMsg,
  ...rest
}: Props): React.ReactElement {
  console.log(errorMsg)
  return (
    <div>
      <Element
        as="input"
        type="text"
        placeholder={placeholder}
        name={name}
        {...inputRef(name, { require: required })}
        {...rest}
        cssx={{
          w: "100%",
          border: "1px solid rgba(116, 110, 164, 0.5)",
          px: 12,
          py: 8,
          borderRadius: 4,
          mb: 20,
        }}
      />
      {errorMsg !== "" && (
        <Element as="p" cssx={{ color: "red", transform: "translateY(-10px)" }}>
          {errorMsg}
        </Element>
      )}
    </div>
  )
}

InputField.defaultProps = {
  placeholder: "",
  onChange: () => {},
  name: "",
  required: false,
  errorMsg: "",
}

export default InputField
