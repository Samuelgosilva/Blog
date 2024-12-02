import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCbI5QZEjmVj7Bp4s8ZM8Uhn-gu6yUBvfc",
    authDomain: "blog-a6a25.firebaseapp.com",
    projectId: "blog-a6a25",
    storageBucket: "blog-a6a25.firebasestorage.app",
    messagingSenderId: "218481443419",
    appId: "1:218481443419:web:9136adf8398b6de4ddb57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }