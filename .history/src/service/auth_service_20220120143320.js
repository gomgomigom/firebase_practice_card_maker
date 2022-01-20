import app from './firebase.js';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  linkWithPopup,
} from 'firebase/auth';

class AuthService {
  login(providerName) {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const provider =
      providerName === 'google' ? googleProvider : githubProvider;
    linkWithPopup(auth.currentUser, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
    });
  }
}

export default AuthService;
