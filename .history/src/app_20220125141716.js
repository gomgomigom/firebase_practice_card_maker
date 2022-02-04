import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login authService={authService} />}>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
