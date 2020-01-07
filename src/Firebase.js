import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';


// INITIALIZATION
const firebaseApp = firebase.initializeApp(firebaseConfig);


// AUTHENTICATION
const firebaseAuth = firebaseApp.auth();

var googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => firebaseAuth.signInWithPopup(googleProvider); 

const signOut = () => firebaseAuth.signOut(); 


// CLOUD STORE
const firebaseDB = firebaseApp.firestore();


// EXPORT
export {signInWithGoogle, signOut, firebaseDB};