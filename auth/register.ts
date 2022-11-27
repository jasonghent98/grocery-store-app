import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signUpUser = async (email: string, password: string, phoneNumber?: string): Promise<any> => {
   return createUserWithEmailAndPassword(auth, email, password).then(<T>(userCredential: T) => {
    // user successfully signed in if new account is created
        console.log(userCredential)

   }).catch(err => console.log("user not created", err))
}