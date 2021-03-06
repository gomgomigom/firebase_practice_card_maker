import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={company}
      ></input>
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={title}
      ></input>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={email}
      ></input>
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
