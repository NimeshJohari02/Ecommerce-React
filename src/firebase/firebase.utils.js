import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAPrd_OqxG-0ErHbjVjVz3aPJPI9ei9Pg",
  authDomain: "ecommerce-react-tutorial.firebaseapp.com",
  projectId: "ecommerce-react-tutorial",
  storageBucket: "ecommerce-react-tutorial.appspot.com",
  messagingSenderId: "935450960862",
  appId: "1:935450960862:web:beedb08ae48ca98a11334f",
  measurementId: "G-M1Z48KH2MZ",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Google Auth Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
