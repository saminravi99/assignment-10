// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAU5PBg3WGeOsPkOtSifp1XD3dEoCyJWg",
  authDomain: "independent-service-provider.firebaseapp.com",
  projectId: "independent-service-provider",
  storageBucket: "independent-service-provider.appspot.com",
  messagingSenderId: "372594096121",
  appId: "1:372594096121:web:ae9487f3660f38c0482f28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;