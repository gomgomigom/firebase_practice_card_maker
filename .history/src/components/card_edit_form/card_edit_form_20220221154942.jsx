import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const onSubmit = () => {};

  return (
    <form>
      <input type='text' name='name' value={name}></input>
      <input type='text' name='name' value={company}></input>
      <select name='theme' value={theme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input type='text' name='name' value={title}></input>
      <input type='text' name='name' value={email}></input>
      <textarea name='message' value={message}></textarea>
      <ImageFileInput />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
