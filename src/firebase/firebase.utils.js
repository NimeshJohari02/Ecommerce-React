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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const mydata = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await mydata.get();
  if (!snapshot.exists) {
    // Crud is always possisble on DOC REFERENCE;
    const { email, displayName } = userAuth;
    const dateCreated = new Date();
    try {
      await mydata.set({
        displayName,
        email,
        dateCreated,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User ");
      console.log(error);
    }
  }
  return mydata;
};
export const addCollectionAndDocuments = async (
  CollectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(CollectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((el) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, el);
  });
  return await batch.commit();
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Google Auth Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const convertSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((collection) => {
    const { title, items } = collection.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: collection.id,
      title,
      items,
    };
  });
  console.log(transformedCollection);
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};
