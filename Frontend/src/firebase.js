// firebase.js;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIcPO38_zLNWwZRd3NlaEk2_a0Jt-XkmA",
  authDomain: "celebday-e0944.firebaseapp.com",
  projectId: "celebday-e0944",
  storageBucket: "celebday-e0944.appspot.com",
  messagingSenderId: "71260102527",
  appId: "1:71260102527:web:c556689a78882491c4c44a",
  measurementId: "G-FV2BZX7QM7",
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firestore = firebase.firestore();
// const db = getFirestore(app);
export { firestore };
