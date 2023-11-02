import { initializeApp } from "firebase/compat/app";
//import { firebase } from '@firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';


  
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId:process.env.REACT_APP_FIREBASE_APP_ID ,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const apple = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//export const auth = getAuth(firebaseApp)
//export const storage= getStorage(firebaseApp)

export const auth = getAuth(apple)
export const storage= getStorage(apple)


