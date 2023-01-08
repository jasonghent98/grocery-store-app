import {getAuth, signInWithPhoneNumber, signInWithEmailAndPassword, RecaptchaVerifier} from "firebase/auth"
import {auth} from './firebase'
import {useSelector, useDispatch} from 'react-redux'


// global object that already exists for the ts compiler
// declare global {
//     interface Window {
//         recaptchaVerifier: any,
//         confirmationResult: any
//     }
// }

// // setup recaptcha on the client
// window.recaptchaVerifier = new RecaptchaVerifier('login-button', {
//     'size': 'invisible',
//     'callback': <T>(response: T) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       return signInWithPhone
//     }
//   }, auth);

// const appVerifier = window.recaptchaVerifier;


// // phone sign in
// const signInWithPhone = async (phoneNumber: string, authValue = auth, verifier = appVerifier) => {
//     signInWithPhoneNumber(auth, phoneNumber, verifier).then(confirmationResult => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       console.log(confirmationResult)

//       // method needs to be defined and called when the user is prompted to 
//       // pass in the verification code they were sent
//       // const code = getCodeFromUserInputInRedux()


//       // if this call succeeds, the user will be successfully signed in, else, they wont
//       // confirmationResult.confirm(code).then(<T>(result: T) => {
//       //   const user = result.user
//       // }).catch(err => {
//       //   console.log("user code verification failed", err)
//       // })


//     }).catch(error => {
//         // err. SMS not sent
//         console.log("signInWithPhoneNumber failed", error)

//         // reset recaptcha on client browser
//         window.recaptchaVerifier.render().then(<T>(widgetId: T) => {
//             grecaptcha.reset(widgetId)
//         })
//     })
// }


export const signInWithEmail = async (email: string, password: string, authValue = auth) => {
  return signInWithEmailAndPassword(authValue, email, password).then((userCredential) => userCredential.user).catch(err => err)
}