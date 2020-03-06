import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB_Zs5aCZpZ6Nx4xSu7WQIxrC9FNN__H-o",
  authDomain: "e-commerce-react-56d0b.firebaseapp.com",
  databaseURL: "https://e-commerce-react-56d0b.firebaseio.com",
  projectId: "e-commerce-react-56d0b",
  storageBucket: "e-commerce-react-56d0b.appspot.com",
  messagingSenderId: "1041653750513",
  appId: "1:1041653750513:web:99548498c651ccc1eba750",
  measurementId: "G-LX37SFVF0W"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user!!!", error.message);
    }
  }

  return userRef;
};

export default firebase;
