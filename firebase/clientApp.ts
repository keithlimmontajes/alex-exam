// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYCGML2VGGhGFm5Sn8oyTe633c6fIPCDU",
  authDomain: "fir-developer-62a95.firebaseapp.com",
  projectId: "fir-developer-62a95",
  storageBucket: "fir-developer-62a95.appspot.com",
  messagingSenderId: "9101352856",
  appId: "1:9101352856:web:05ec2f66a08963816955ed",
};

// Initialize Firebase
if (!firebase) {
  initializeApp(firebaseConfig);
}

export default firebase;
