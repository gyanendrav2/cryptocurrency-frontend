import { CssxObject } from "@react-cssx/core"

export interface ModalInterface {
  wrapper: CssxObject
  heading: CssxObject
  closeIcon: CssxObject
}

export const modalStyle: ModalInterface = {
  wrapper: {
    w: "37rem",
    border: "1px solid rgba(116, 110, 164, 0.5)",
    borderRadius: 12,
    px: 89,
    bg: "white",
    pos: "relative",
    overflow: "auto",
    maxHeight: "100vh",
  },
  heading: {
    fontWeight: 800,
    fontSize: 32,
    color: "purple.dark",
    textAlign: "center",
    mt: 64,
    mb: 48,
  },
  closeIcon: {
    pos: "absolute",
    top: "2rem",
    right: "2rem",
    cursor: "pointer",
  },
}
