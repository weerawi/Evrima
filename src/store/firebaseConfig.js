import firebase from 'firebase/app';
// import {getAuth , GoogleAuthProvider , signInWithGoogle} from 'firebase/auth';
// import App from '../App';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY",
    authDomain: "evrima-1685701666983.firebaseapp.com",
    projectId: "evrima-1685701666983",
    storageBucket: "evrima-1685701666983.appspot.com",
    messagingSenderId: "842744481983",
    appId: "1:842744481983:web:e004b03dc6e8c774d79e0a",
    measurementId: "G-5V0CBF1KB1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  const auth = getAuth(App); 

export default firebase;

 