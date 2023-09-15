import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBv1TYjxtnF2Cag1rldccl4XKwlUqTDQMk",
  authDomain: "rugbyshop-89c41.firebaseapp.com",
  projectId: "rugbyshop-89c41",
  storageBucket: "rugbyshop-89c41.appspot.com",
  messagingSenderId: "869869884032",
  appId: "1:869869884032:web:c85376458d5a8be169cc65"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)