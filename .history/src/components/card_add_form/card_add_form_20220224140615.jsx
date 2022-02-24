import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
  const name = useRef();
  const company = useRef();
  const theme = useRef();
  const title = useRef();
  const email = useRef();
  const message = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name
company
theme
title
email
message
    }
  };

  return (
    <form className={styles.form}>
      <input
        ref={name}
        className={styles.input}
        type='text'
        name='name'
        placeholder='name'
      ></input>
      <input
        ref={company}
        className={styles.input}
        type='text'
        name='company'
        placeholder='company'
      ></input>
      <select ref={theme} className={styles.select} name='theme' value='theme'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={title}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      ></input>
      <input
        ref={email}
        className={styles.input}
        type='text'
        name='email'
        placeholder='email'
      ></input>
      <textarea
        ref={message}
        className={styles.textarea}
        name='message'
        placeholder='message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
