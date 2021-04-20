import React, { ReactElement } from "react"
import { IconInterface } from "../../interfaces/icon"

export default function BulletIcon(props: IconInterface): ReactElement {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6572 1.6404C11.4807 1.46357 11.1943 1.46326 11.0177 1.63965L5.59213 7.05095L3.63458 4.92486C3.46544 4.74126 3.17945 4.72935 2.99554 4.89847C2.81176 5.06762 2.8 5.35375 2.96915 5.53752L5.24554 8.00973C5.3289 8.10034 5.44558 8.15296 5.5686 8.15551C5.5719 8.15565 5.57509 8.15565 5.57826 8.15565C5.69781 8.15565 5.81282 8.10817 5.89754 8.02375L11.6563 2.28004C11.8333 2.10367 11.8336 1.81724 11.6572 1.6404Z"
        fill="white"
      />
      <path
        d="M11.5477 5.54773C11.2979 5.54773 11.0955 5.75018 11.0955 6C11.0955 8.80976 8.80976 11.0955 6 11.0955C3.19041 11.0955 0.904523 8.80976 0.904523 6C0.904523 3.19041 3.19041 0.904523 6 0.904523C6.2498 0.904523 6.45227 0.70207 6.45227 0.452273C6.45227 0.202453 6.2498 0 6 0C2.69156 0 0 2.69156 0 6C0 9.3083 2.69156 12 6 12C9.3083 12 12 9.3083 12 6C12 5.7502 11.7975 5.54773 11.5477 5.54773Z"
        fill="#69D5DD"
      />
    </svg>
  )
}
