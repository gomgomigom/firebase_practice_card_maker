import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='name'
      ></input>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='company'
      ></input>
      <select className={styles.select} name='theme' value='theme'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='title'
      ></input>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='email'
      ></input>
      <textarea
        className={styles.textarea}
        name='message'
        placeholder='message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
