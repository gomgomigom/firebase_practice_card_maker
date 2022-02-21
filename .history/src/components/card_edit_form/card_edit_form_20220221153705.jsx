import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

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
    </form>
  );
};

export default CardEditForm;
