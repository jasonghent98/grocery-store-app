import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs} from "@firebase/firestore"
import {getAnalytics} from "firebase/analytics"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE,
    messagingSenderId: process.env.NEXT_PUBLIC_MESS_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}
 
// init firebase instance with the configurations set
export const app = initializeApp(firebaseConfig)

// init the auth instance that will provide auth methods to your app
export const auth = getAuth(app)

const db = getFirestore(app)

// let analytics;
// should be an object
// if (window !== undefined && typeof window !== undefined) analytics = getAnalytics(app)
