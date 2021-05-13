import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhVe6pGfVpE2DXJOKWUpej10yAv_HeO9U",
  authDomain: "freeleadfinder-b9edf.firebaseapp.com",
  databaseURL: "https://freeleadfinder-b9edf-default-rtdb.firebaseio.com",
  projectId: "freeleadfinder-b9edf",
  storageBucket: "freeleadfinder-b9edf.appspot.com",
  messagingSenderId: "226639636519",
  appId: "1:226639636519:web:01144cb0216ddb8805c602",
  measurementId: "G-3JN48E2FV0",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
