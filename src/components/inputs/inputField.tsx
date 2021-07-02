import { Element } from "@react-cssx/core"
import React from "react"

interface Props {
  placeholder?: string
  onChange?: (e: any) => void
}

function InputField({ placeholder, onChange }: Props): React.ReactElement {
  return (
    <div>
      <Element
        as="input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        cssx={{
          w: "100%",
          border: "1px solid rgba(116, 110, 164, 0.5)",
          px: 12,
          py: 8,
          borderRadius: 4,
          mb: 20,
        }}
      />
    </div>
  )
}

InputField.defaultProps = {
  placeholder: "",
  onChange: () => {},
}

export default InputField
