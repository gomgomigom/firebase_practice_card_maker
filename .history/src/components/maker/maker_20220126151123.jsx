import React from 'react';
import { useLocation } from 'react-router-dom';
// import styles from './maker.module.css';

const Maker = (props) => {
  const location = useLocation();
  return <h1>{location.state.id.slice(0, 4)}</h1>;
};

export default Maker;