//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDftyYZRRoz1_G8HHMagUCHaaYe6s8jp2E",
  authDomain: "p-celebday.firebaseapp.com",
  projectId: "p-celebday",
  storageBucket: "p-celebday.appspot.com",
  messagingSenderId: "394481877546",
  appId: "1:394481877546:web:f60540db1595f70c9a3953",
  measurementId: "G-JKHLXE2FQC",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
