import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDc7Vh9-SGe3SmWXBtjkq_G56bTKm16lCI",
  authDomain: "kenyanfarm.firebaseapp.com",
  projectId: "kenyanfarm",
  storageBucket: "kenyanfarm.appspot.com",
  messagingSenderId: "1095568666592",
  appId: "1:1095568666592:web:468eaf128e1d3cb85c8585",
  measurementId: "G-MBLP07CM5H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { firestamp };
  export default firebaseApp.firestore();