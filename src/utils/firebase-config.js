import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuCqC4DwtmugcVRLmDj5tz901D5b8s6-o",
    authDomain: "movies-a0d5a.firebaseapp.com",
    projectId: "movies-a0d5a",
    storageBucket: "movies-a0d5a.appspot.com",
    messagingSenderId: "740158215301",
    appId: "1:740158215301:web:6a6532c89560f3a2be45ec"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
