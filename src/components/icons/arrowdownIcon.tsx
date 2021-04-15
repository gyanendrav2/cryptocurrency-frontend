import React, { ReactElement } from "react"
import { IconInterface } from "../../interfaces/icon"

// interface props {
// width?: number
// height?: number
// color: string
// }

export function ArrowdownIcon(props: IconInterface): ReactElement {
  return (
    <svg
      width={8}
      height={6}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.76072 5.5791C4.36094 6.05848 3.62452 6.05848 3.22474 5.5791L0.357092 2.14046C-0.186027 1.4892 0.277072 0.499999 1.12508 0.499999L6.86038 0.5C7.70839 0.5 8.17149 1.4892 7.62837 2.14046L4.76072 5.5791Z"
        fill={props.color ? props.color : "currentColor"}
      />
    </svg>
  )
}
