// import * as firebase from 'firebase'
import firebase from 'firebase/app';
// import firestore from 'firebase/firestore'
// import * as firebase from 'firebase' 
import 'firebase/firebase-firestore'

const firebaseConfig = {
      apiKey: "AIzaSyCyUxh3iRWoypvbXc-waQw7Dd7pqG6y5pI",
      authDomain: "burgerqueen-9fc96.firebaseapp.com",
      databaseURL: "https://burgerqueen-9fc96.firebaseio.com",
      projectId: "burgerqueen-9fc96",
      storageBucket: "burgerqueen-9fc96.appspot.com",
      messagingSenderId: "80737932251",
      appId: "1:80737932251:web:073968cf16de68bae64dfe",
      measurementId: "G-8H7Q6BL642"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// firebase.analytics();
const db = firebase.firestore();

export default db;
