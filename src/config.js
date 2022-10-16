// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9k-OBm6k2Kt-kltIXZ6XaKKz4V1akb2E",
  authDomain: "blockchain-ad13d.firebaseapp.com",
  projectId: "blockchain-ad13d",
  storageBucket: "blockchain-ad13d.appspot.com",
  messagingSenderId: "208938027549",
  appId: "1:208938027549:web:ac78f48bee18817b2f14f4"
};

const fireDb = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line 
const app = initializeApp(firebaseConfig);
export default fireDb.database().ref();