import React, { ReactElement } from "react"
import { IconInterface } from "../../interfaces/icon"

export default function LockedIcon(props: IconInterface): ReactElement {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="path-1-inside-1" fill="white">
        <rect x={15} y={5} width={10} height={14} rx={1} transform="rotate(90 15 5)" />
      </mask>
      <rect
        x={15}
        y={5}
        width={10}
        height={14}
        rx={1}
        transform="rotate(90 15 5)"
        stroke="#69D5DD"
        strokeWidth={4}
        mask="#69D5DD"
      />
      <path
        d="M5 4.5V4.5C5 2.84315 6.34315 1.5 8 1.5V1.5C9.65685 1.5 11 2.84315 11 4.5V4.5"
        stroke="#635C99"
        strokeWidth={2}
      />
    </svg>
  )
}
