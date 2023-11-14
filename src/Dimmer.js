import React from 'react';
import './Dimmer.css';

const Dimmer = ({ onClick, isActive }) => {
  return isActive ? <div className="dimmer" onClick={onClick}></div> : null;

  
};

export default Dimmer;
