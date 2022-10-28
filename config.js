import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyATvuNKFvjv-WXFBJHUy63i8rkgQvQMu3c",
    authDomain: "class71project-680f3.firebaseapp.com",
    projectId: "class71project-680f3",
    storageBucket: "class71project-680f3.appspot.com",
    messagingSenderId: "353358588742",
    appId: "1:353358588742:web:ae1b1745480474627a9347"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
