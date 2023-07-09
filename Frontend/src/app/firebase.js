//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIcPO38_zLNWwZRd3NlaEk2_a0Jt-XkmA",
  authDomain: "celebday-e0944.firebaseapp.com",
  projectId: "celebday-e0944",
  storageBucket: "celebday-e0944.appspot.com",
  messagingSenderId: "71260102527",
  appId: "1:71260102527:web:c556689a78882491c4c44a",
  measurementId: "G-FV2BZX7QM7",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
