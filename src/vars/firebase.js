import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "meetup-react-penang.web.app",
  databaseURL: "https://react-penang.firebaseio.com",
  projectId: "react-penang",
});

export const firebaseAppAuth = firebaseApp.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const firestore = firebase.firestore();

export default firebaseApp;
