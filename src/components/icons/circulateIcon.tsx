import React, { ReactElement } from "react"
import { IconInterface } from "../../interfaces/icon"

export default function CirculateIcon(props: IconInterface): ReactElement {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.61629 3.5C5.63655 3.5 3.95916 4.71241 3.30025 6.39951C3.10645 6.89574 3 7.4347 3 8C3 8.44631 3.06634 8.87583 3.18937 9.28065C3.41315 10.017 3.82653 10.6777 4.3781 11.2071C4.82608 11.637 5.36371 11.9786 5.96123 12.2024C6.47343 12.3942 7.03092 12.5 7.61629 12.5C9.35478 12.5 10.8591 11.5654 11.6464 10.1963C11.9217 9.71756 12.4716 9.41084 13 9.57143C13.5284 9.73202 13.8333 10.2955 13.5924 10.7925C12.5263 12.9917 10.2447 14.5 7.61629 14.5C6.78828 14.5 5.99336 14.3501 5.25972 14.0753C4.40528 13.7553 3.63568 13.2665 2.99331 12.6501C2.20256 11.8913 1.60231 10.9366 1.27579 9.8622C1.09617 9.27119 1 8.64579 1 8C1 7.18119 1.1546 6.39575 1.43729 5.67192C2.39334 3.22401 4.80582 1.5 7.61629 1.5C8.4443 1.5 9.23922 1.64988 9.97286 1.92467C10.5506 2.14108 11.0897 2.43466 11.5768 2.79271C12.0218 3.11981 12.0183 3.76015 11.6279 4.1508C11.2375 4.54145 10.6083 4.53054 10.1429 4.23316C9.87099 4.05941 9.57911 3.91288 9.27135 3.7976C8.75914 3.60576 8.20166 3.5 7.61629 3.5Z"
        fill="#69D5DD"
      />
      <path
        d="M10.127 8.1001C9.57467 8.1001 9.12695 7.65238 9.12695 7.1001C9.12695 6.54781 9.57467 6.1001 10.127 6.1001L15.127 6.1001L15.127 8.1001L10.127 8.1001Z"
        fill="#635C99"
      />
      <path
        d="M15.127 8.1001L13.127 8.1001L13.127 3.1001C13.127 2.54781 13.5747 2.1001 14.127 2.1001C14.6792 2.1001 15.127 2.54781 15.127 3.1001L15.127 8.1001Z"
        fill="#635C99"
      />
    </svg>
  )
}