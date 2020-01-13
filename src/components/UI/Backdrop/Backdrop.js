import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
  props.show ? <div className="Backdrop" onClick={props.onClick} /> : null
);

export default Backdrop;