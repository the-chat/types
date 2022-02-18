import {User} from "firebase/auth"

interface BaseUserData
  extends Pick<
    User,
    "uid" | "displayName" | "email" | "photoURL" | "phoneNumber"
  > {
  // todo:
  // lang: "en" | "ru"
  lang: string
}

export {BaseUserData}
