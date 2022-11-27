import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

declare global {
    interface UserCredential {
        user: object
    }
}

export const signUpUser = async (email: string, password: string, phoneNumber?: string): Promise<any> => {
   return createUserWithEmailAndPassword(auth, email, password).then((userCredential: UserCredential) => {
    // user successfully signed in if new account is created
    console.log(userCredential)
        return userCredential.user

   }).catch(err => err)
}