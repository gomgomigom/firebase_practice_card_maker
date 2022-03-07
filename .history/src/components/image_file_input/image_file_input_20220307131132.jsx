import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
    console.log(imageUploader);
  };
  const onChange = (e) => {
    console.log(e.target.files[0].name);
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      ></input>
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
