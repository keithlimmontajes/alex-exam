import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDYCGML2VGGhGFm5Sn8oyTe633c6fIPCDU",
  authDomain: "fir-developer-62a95.firebaseapp.com",
  projectId: "fir-developer-62a95",
  storageBucket: "fir-developer-62a95.appspot.com",
  messagingSenderId: "9101352856",
  appId: "1:9101352856:web:05ec2f66a08963816955ed",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
