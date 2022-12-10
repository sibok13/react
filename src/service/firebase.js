import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2ZvBVbFtDDuacXUmqFtmgpBfScxmZheM",
    authDomain: "fir-lesson-9c899.firebaseapp.com",
    projectId: "fir-lesson-9c899",
    storageBucket: "fir-lesson-9c899.appspot.com",
    messagingSenderId: "977471795702",
    appId: "1:977471795702:web:c16817b1fb877c2a9557d7"
  };

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();