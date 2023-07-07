//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5p_ikKjc0pExlE_9nSckCl3IPLU1dWFM",
  authDomain: "test-9c3fc.firebaseapp.com",
  projectId: "test-9c3fc",
  storageBucket: "test-9c3fc.appspot.com",
  messagingSenderId: "222112199484",
  appId: "1:222112199484:web:b3f0bc1d5d522713ede439",
  measurementId: "G-PX96G8Y5RM",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
