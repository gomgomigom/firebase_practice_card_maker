import firebase from 'firebase';

class AuthService {
  login(providerName) {
    const auth = new firebase.auth[`${providerName}AuthProvider`]();
  }
}
