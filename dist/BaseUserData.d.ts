import { User } from "firebase/auth";
interface BaseUserData extends Pick<User, "uid" | "displayName" | "email" | "photoURL" | "phoneNumber"> {
    lang: string;
}
export default BaseUserData;
