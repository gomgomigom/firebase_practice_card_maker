import './app.css';
import Login from './components/login/login';
import AuthService from './service/auth_service';

const authService = new AuthService();

function App() {
  return (
    <h1>
      <Login authService={authService} />
    </h1>
  );
}

export default App;
