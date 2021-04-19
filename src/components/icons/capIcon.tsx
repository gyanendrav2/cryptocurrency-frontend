import React, { ReactElement } from "react"
import { IconInterface } from "../../interfaces/icon"

export default function CapIcon(props: IconInterface): ReactElement {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={15} y={1} width={2} height={14} rx={1} transform="rotate(90 15 1)" fill="#69D5DD" />
      <rect
        x={15}
        y={13}
        width={2}
        height={14}
        rx={1}
        transform="rotate(90 15 13)"
        fill="#69D5DD"
      />
      <path
        d="M4.22176 7.50703C3.83123 7.11651 3.83123 6.48334 4.22176 6.09282C4.61228 5.7023 5.24545 5.7023 5.63597 6.09282L9.1715 9.62835L7.75729 11.0426L4.22176 7.50703Z"
        fill="#635C99"
      />
      <path
        d="M7.75781 11.0426L6.3436 9.62839L9.87913 6.09286C10.2697 5.70233 10.9028 5.70233 11.2933 6.09286C11.6839 6.48338 11.6839 7.11655 11.2933 7.50707L7.75781 11.0426Z"
        fill="#635C99"
      />
    </svg>
  )
}
