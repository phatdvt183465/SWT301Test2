// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDWQw5LjT15qVp94Mg58AcfeItkrQd5YU",
  authDomain: "gemfpt.firebaseapp.com",
  projectId: "gemfpt",
  storageBucket: "gemfpt.appspot.com",
  messagingSenderId: "528066248094",
  appId: "1:528066248094:web:a88bcdf3fcdf62c0cbaa8f",
  measurementId: "G-WTS436MJWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()

export {auth,provider}