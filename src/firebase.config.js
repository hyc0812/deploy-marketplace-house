// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHv4Sff7BhmVdMpZlYb4iOavoYaR7N2Zk",
  authDomain: "yong-house-marketplace-app.firebaseapp.com",
  projectId: "yong-house-marketplace-app",
  storageBucket: "yong-house-marketplace-app.appspot.com",
  messagingSenderId: "590584863222",
  appId: "1:590584863222:web:8d51bd459d680b3ff4cfd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
