import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const configCrwnClothing = {
    apiKey: "AIzaSyBgLXFLvy_CY15o9qm048sCySkK91fkhlM",
    authDomain: "crwn-db-b4f27.firebaseapp.com",
    databaseURL: "https://crwn-db-b4f27.firebaseio.com",
    projectId: "crwn-db-b4f27",
    storageBucket: "crwn-db-b4f27.appspot.com",
    messagingSenderId: "108649588940",
    appId: "1:108649588940:web:97ad0dac5a5a65f31bba69",
    measurementId: "G-5B9LVHCRL3"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(configCrwnClothing);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



