import { CssxObject } from "@react-cssx/core"

export interface FormStyleInterface {
  wrapper: CssxObject
  button: CssxObject
  card: CssxObject
}

export const formStyle: FormStyleInterface = {
  wrapper: {
    backgroundColor: "grey.lightDark",
    borderRadius: 8,
    padding: 24,
    height: "fit-content",
  },
  button: {
    w: "100%",
    textAlign: "center",
  },
  card: {
    backgroundColor: "grey.dark",
    p: "6px 16px 12px 16px",
    borderRadius: 8,
    color: "white",
  },
}
