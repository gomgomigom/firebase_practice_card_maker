import styles from './app.module.css';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <Login authService={authService} />
    </div>
  );
}

export default App;