// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwoPDWmuMzLeFgLwGcfiad32Is0OPXHvU",
    authDomain: "chat-8b205.firebaseapp.com",
    projectId: "chat-8b205",
    storageBucket: "chat-8b205.appspot.com",
    messagingSenderId: "534429108037",
    appId: "1:534429108037:web:f15585068c5993b085202c"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();