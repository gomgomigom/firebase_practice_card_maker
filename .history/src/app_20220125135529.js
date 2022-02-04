import { BrowserRouter, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Route exact path='/'>
          <Login authService={authService} />
        </Route>
        <Route path='/maker'>
          <Maker />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
