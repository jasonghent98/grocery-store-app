import {getAuth, signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth"
import {app} from './firebase'

// init the auth instance that will provide auth methods to your app
const auth = getAuth(app)

declare global {
    interface Window {
        recaptchaVerifier: any,
        confirmationResult: any
    }
}


window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': <T>(response: T): T => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      return onSignInSubmit();
    }
  }, auth);

const appVerifier = window.recaptchaVerifier;

const signInWithPhone = (phoneNumber: string, authValue = auth, verifier = appVerifier) => {
    signInWithPhoneNumber(auth, phoneNumber, verifier).then(confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(error => {
        // err. SMS not sent
        console.log(error)

        // reset recaptcha on client browser
        window.recaptchaVerifier.render().then(<T>(widgetId: T) => {
            grecaptcha.reset(widgetId)
        })
    })
}