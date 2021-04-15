import React, { ReactElement } from "react"

// interface props {
// width?: number
// height?: number
// color: string
// }

export function ArrowdownIcon(props: props): ReactElement {
  return (
    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={8}
        height={8}
      >
        <rect x={8} width={8} height={8} transform="rotate(90 8 0)" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M4.76072 6.5791C4.36094 7.05848 3.62452 7.05848 3.22474 6.5791L0.357092 3.14046C-0.186027 2.4892 0.277072 1.5 1.12508 1.5L6.86038 1.5C7.70839 1.5 8.17149 2.4892 7.62837 3.14046L4.76072 6.5791Z"
          fill="#C7EFEE"
        />
      </g>
    </svg>
  )
}
