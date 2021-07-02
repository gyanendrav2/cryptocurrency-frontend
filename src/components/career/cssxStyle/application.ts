import { CssxObject } from "@react-cssx/core"

export interface ModalInterface {
  wrapper: CssxObject
  heading: CssxObject
  closeIcon: CssxObject
}

export const applicationStyle: ModalInterface = {
  wrapper: {
    w: "100%",
    border: "1px solid rgba(116, 110, 164, 0.5)",
    borderRadius: 12,
    px: "4.687rem",
    bg: "white",
    maxHeight: "57.187rem",
    position: "relative",
    overflow: "auto",
  },
  heading: {
    fontWeight: 800,
    fontSize: 32,
    color: "purple.dark",
    textAlign: "center",
    mt: 48,
    mb: 40,
  },
  closeIcon: {
    pos: "absolute",
    top: "2rem",
    right: "2rem",
    cursor: "pointer",
  },
}
