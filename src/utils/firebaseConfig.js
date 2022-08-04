// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzQKQZQUXEyq2Gzsxj7M-PKukapByGRCE",
    authDomain: "ecomm-healthy.firebaseapp.com",
    projectId: "ecomm-healthy",
    storageBucket: "ecomm-healthy.appspot.com",
    messagingSenderId: "1065861229353",
    appId: "1:1065861229353:web:a88d12457eab72e0962538"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);