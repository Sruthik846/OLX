import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgxPCVM6aeokhtCmXo1oJdyF4Nv9HfcUA",
    authDomain: "olxapp-6e5da.firebaseapp.com",
    projectId: "olxapp-6e5da",
    storageBucket: "olxapp-6e5da.appspot.com",
    messagingSenderId: "964094953295",
    appId: "1:964094953295:web:1026659dec6f244c4d273a",
    measurementId: "G-YG99FSL7SC"
  };

  export default firebase.initializeApp(firebaseConfig)