import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA9zPZIIMpVJrAgsi-wIgreDwHGDI_MO2k",
  authDomain: "drugstoc-f5019.firebaseapp.com",
  projectId: "drugstoc-f5019",
  storageBucket: "drugstoc-f5019.appspot.com",
  messagingSenderId: "627777008006",
  appId: "1:627777008006:web:cda90c3d43632d95d73c07",
  measurementId: "G-77J1L7KKQW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore()

export default firebase;
