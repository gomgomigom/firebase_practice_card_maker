import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <h1>
      <Login authService={authService} />
    </h1>
  );
}

export default App;
