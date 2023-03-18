import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyBgABRORQc5p7jrldnqiDFlQgRtW0GHsaw",
  authDomain: "felcon-clothing.firebaseapp.com",
  projectId: "felcon-clothing",
  storageBucket: "felcon-clothing.appspot.com",
  messagingSenderId: "608854115750",
  appId: "1:608854115750:web:2128f6f41250fc9160bb67",
  measurementId: "G-5TSNMZ2GE4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

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
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;