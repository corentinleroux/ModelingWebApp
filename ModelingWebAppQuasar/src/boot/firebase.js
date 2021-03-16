import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCvvreJoorwKhdoKMPbHgHIoF-PS-_xvSc',
    authDomain: 'modelingwebapp.firebaseapp.com',
    databaseURL: 'https://modelingwebapp-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'modelingwebapp',
    storageBucket: 'modelingwebapp.appspot.com',
    messagingSenderId: '172244241419',
    appId: '1:172244241419:web:54269e3175b1b8057b4b0e',
    measurementId:'G-WFWR1EB3Z1'
  };

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();

export { firebaseAuth, db }