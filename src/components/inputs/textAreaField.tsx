import { Element } from "@react-cssx/core"
import React from "react"

interface Props {
  placeholder?: string
  onChange?: (e: any) => void
}

function TextAreaField({ placeholder, onChange }: Props): React.ReactElement {
  return (
    <div>
      <Element
        as="textarea"
        type="text"
        rows={5}
        placeholder={placeholder}
        onChange={onChange}
        cssx={{
          w: "100%",
          border: "1px solid rgba(116, 110, 164, 0.5)",
          px: 12,
          py: 8,
          borderRadius: 4,
          mb: 24,
        }}
      />
    </div>
  )
}

TextAreaField.defaultProps = {
  placeholder: "",
  onChange: () => {},
}

export default TextAreaField
