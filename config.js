// 把 Firebase 控制台複製的 firebaseConfig 貼在這裡（整個物件替換掉下面這份）
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUaDpvST1FkpK5FQlARRbrB6_-gagzos",
  authDomain: "werewolf-49098.firebaseapp.com",
  databaseURL: "https://werewolf-49098-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "werewolf-49098",
  storageBucket: "werewolf-49098.firebasestorage.app",
  messagingSenderId: "687541185626",
  appId: "1:687541185626:web:197bd1ecf434261529fc63",
  measurementId: "G-P5SWYBHFDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
