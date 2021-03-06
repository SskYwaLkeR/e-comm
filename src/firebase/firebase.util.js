import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBEvYR0x5y9hr7zw6pDzi-tQ1nCNN8gY7M",
    authDomain: "shop-db-2c77f.firebaseapp.com",
    databaseURL: "https://shop-db-2c77f.firebaseio.com",
    projectId: "shop-db-2c77f",
    storageBucket: "shop-db-2c77f.appspot.com",
    messagingSenderId: "880834554025",
    appId: "1:880834554025:web:9090505bfa785dc35361b8",
    measurementId: "G-9FTKCSRGJ7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log(snapshot);
    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user' , error.message)
      }

    }
    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Google auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;