import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from "./auth-context";

const firebaseConfig = {
  apiKey: "AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY",
  authDomain: "evrima-1685701666983.firebaseapp.com",
  projectId: "evrima-1685701666983",
  storageBucket: "evrima-1685701666983.appspot.com",
  messagingSenderId: "842744481983",
  appId: "1:842744481983:web:e004b03dc6e8c774d79e0a",
  measurementId: "G-5V0CBF1KB1"
};
 


const useSignIn = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const signInWithGoogle = () => {
    const app = firebase.initializeApp(firebaseConfig);  
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider(); 

    auth.signInWithPopup(provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;  

 
        authCtx.signInG(result.user.getIdToken(), name,email , profilePic);
        history.replace('/ ');
      })  
      .catch((error) => {
        console.log(error.message);
      });
  };


  const signInWithFacebook = () => {
    const app = firebase.initializeApp(firebaseConfig);  
    const auth = app.auth();
    const provider = new firebase.auth.FacebookAuthProvider(); 

    auth.signInWithPopup(provider)
      .then((result) => { 
        const email = result.user.email;
        const profilePic = result.user.photoURL; 
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = provider.credentialFromResult(result);
        const accessToken = credential.accessToken; 

 
        authCtx.signInG(accessToken, user,email , profilePic);
        history.replace('/ ');
      })  
      .catch((error) => {
        console.log(error.message);
      });
  };

  return {signInWithGoogle,signInWithFacebook};
};

export default useSignIn;




