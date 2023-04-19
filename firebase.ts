// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMmm_Ts5xf9uNix458AcxrJFAy8v88574",
  authDomain: "netflix-a39dc.firebaseapp.com",
  projectId: "netflix-a39dc",
  storageBucket: "netflix-a39dc.appspot.com",
  messagingSenderId: "770078819302",
  appId: "1:770078819302:web:7fafdad091d1245fff8c27",
  measurementId: "G-JLCQMX2MTY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }