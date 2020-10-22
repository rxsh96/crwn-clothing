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

  export const createUserProfileDocument = async (userAuth, additionaData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({ 
          displayName,
          email,
          createdAt,
          ...additionaData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;