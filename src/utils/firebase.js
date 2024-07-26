// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx3WzRC-6hAcS0t3sTl1hbiQOR5NeUl20",
  authDomain: "course-app-a606b.firebaseapp.com",
  projectId: "course-app-a606b",
  storageBucket: "course-app-a606b.appspot.com",
  messagingSenderId: "27984153775",
  appId: "1:27984153775:web:2c1afa36ce4510f9a9985a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}