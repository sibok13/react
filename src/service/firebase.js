import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCW7DIP_orTpr06iEjOnsx6e_Z_fiHUZw",
  authDomain: "gb-react-c8dd1.firebaseapp.com",
  databaseURL: "https://gb-react-c8dd1-default-rtdb.firebaseio.com",
  projectId: "gb-react-c8dd1",
  storageBucket: "gb-react-c8dd1.appspot.com",
  messagingSenderId: "318823658508",
  appId: "1:318823658508:web:88c77cce86e245622aea29"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();