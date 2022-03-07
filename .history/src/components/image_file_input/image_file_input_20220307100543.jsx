import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  return (
    <div className={styles.container}>
      <input type='file' accept='image/*' name='file'></input>
    </div>
  );
};

export default ImageFileInput;
