import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* 
Só funcionou a conexão com as regras abaixo:
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
} */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhDPQFq597qeHwU8pw58_-QUCdmiOzEPE",
  authDomain: "brejosfaria-68c2e.firebaseapp.com",
  databaseURL: "https://brejosfaria-68c2e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brejosfaria-68c2e",
  storageBucket: "brejosfaria-68c2e.appspot.com",
  messagingSenderId: "589895254849",
  appId: "1:589895254849:web:a54e6a7e91e500864ad7c0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;