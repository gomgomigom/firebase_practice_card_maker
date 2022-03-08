import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    setLoading(false);
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
      {false && (
        <button className={styles.button} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      )}
      {false && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
