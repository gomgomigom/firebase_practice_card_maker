import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  console.log(imageUploader);
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
      ></input>
    </div>
  );
};

export default ImageFileInput;
