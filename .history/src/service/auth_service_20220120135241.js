import app from './firebase.js';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, linkWithPopup } from "firebase/auth";

class AuthService {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const auth = getAuth();
  linkWithPopup(auth.currentUser, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
  });



}  

