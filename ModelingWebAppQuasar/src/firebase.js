/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable quotes */
import { firebase } from '@firebase/app';


import 'firebase/firestore'
import 'firebase/auth'

// Agregar configuración firebase:
const firebaseConfig = {
  apiKey: "AIzaSyCvvreJoorwKhdoKMPbHgHIoF-PS-_xvSc",
  authDomain: "modelingwebapp.firebaseapp.com",
  projectId: "modelingwebapp",
  storageBucket: "modelingwebapp.appspot.com",
  messagingSenderId: "172244241419",
  appId: "1:172244241419:web:54269e3175b1b8057b4b0e",
  measurementId: "G-WFWR1EB3Z1"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();

export { firebaseAuth, db }