 

import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY",
  authDomain: "evrima-1685701666983.firebaseapp.com",
  projectId: "evrima-1685701666983",
  storageBucket: "evrima-1685701666983.appspot.com",
  messagingSenderId: "842744481983",
  appId: "1:842744481983:web:e004b03dc6e8c774d79e0a",
  measurementId: "G-5V0CBF1KB1"
};

 

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL; 

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
}; 






