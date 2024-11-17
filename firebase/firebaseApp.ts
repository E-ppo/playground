import { initializeApp, FirebaseApp, getApp } from 'firebase/app'
import 'firebase/auth'

export let customFirebaseApp: FirebaseApp

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
}

try {
  customFirebaseApp = getApp('app')
} catch (error) {
  customFirebaseApp = initializeApp(firebaseConfig, 'app')
}

const firebase = initializeApp(firebaseConfig)

export default firebase
