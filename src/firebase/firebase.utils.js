import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRNJiZcoS6qirVJSjv-EHwvEQQ0pnYvIU",
    authDomain: "crwn-db-66197.firebaseapp.com",
    databaseURL: "https://crwn-db-66197.firebaseio.com",
    projectId: "crwn-db-66197",
    storageBucket: "crwn-db-66197.appspot.com",
    messagingSenderId: "313304790261",
    appId: "1:313304790261:web:1af8693a0407e7631741bc",
    measurementId: "G-6NZ2W0QTEE"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;