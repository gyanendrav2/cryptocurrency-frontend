import React, { ReactElement, ReactNode } from "react"
import { Box, IElementProps } from "@react-cssx/core"

export interface IContainerProps extends IElementProps {
  children: ReactNode
  [k: string]: any
}

export function Container({ children, ...props }: IContainerProps): ReactElement {
  return (
    <Box __cssx={{ maxWidth: { tablet: 720, desktop: 1080 }, px: 20, mx: "auto" }} {...props}>
      {children}
    </Box>
  )
}
