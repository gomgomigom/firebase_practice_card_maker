import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((a) => {
      onUserChanged(a);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
