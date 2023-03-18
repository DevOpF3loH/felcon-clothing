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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;