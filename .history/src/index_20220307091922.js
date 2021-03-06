import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  return <imageFileInput {...props} imageUPloader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);
