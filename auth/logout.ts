import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signOutUser = async () => {
    return await signOut(auth).then(() => {
        console.log('user signed out')
    }).catch((err) => err)
}