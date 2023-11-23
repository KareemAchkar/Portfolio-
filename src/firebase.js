import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBx1T-cQgH4tN3kgmNyt9DH9xqPDhKFcJE',
  authDomain: 'portfolio-dashboard-5576a.firebaseapp.com',
  projectId: 'portfolio-dashboard-5576a',
  storageBucket: 'portfolio-dashboard-5576a.appspot.com',
  messagingSenderId: '1020418202476',
  appId: '1:1020418202476:web:4c38446374195379c7b149',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app) 
export const storage = getStorage(app)
console.log(auth);

export const signInWithGoogle = () => signInWithPopup(auth, provider)
