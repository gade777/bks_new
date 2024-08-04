// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvHJSzQXz6HTtq3PyBX4K7ZqZ9oI6ru38",
    authDomain: "vedik-78b04.firebaseapp.com",
    projectId: "vedik-78b04",
    storageBucket: "vedik-78b04.appspot.com",
    messagingSenderId: "352310155104",
    appId: "1:352310155104:web:30aa964a803b57bdd23005"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
