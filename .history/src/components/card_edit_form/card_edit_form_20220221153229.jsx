import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;

  return (
    <form>
      <input name='name' value={name}></input>
      <input name='name' value={company}></input>
      <input name='name' value={title}></input>
      <input name='name' value={email}></input>
    </form>
  );
};

export default CardEditForm;
