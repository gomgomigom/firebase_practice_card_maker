import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const onClick = (e) => {
    console.log(imageUploader);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
      ></input>
      <button className={styles.button} onClick={onClick} />
    </div>
  );
};

export default ImageFileInput;
