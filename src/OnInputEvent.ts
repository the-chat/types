import { ChangeEvent } from "react"

// todo?: add Textarea support (if so, target.files will not be not available)
// todo?: FormEvent like in @mui/material
// learn
// learn: diffrent between ChangeEvent and FormEvent
export type OnInputEvent = ChangeEvent<HTMLInputElement>
//   | ChangeEvent<HTMLTextAreaElement> // !
