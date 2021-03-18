import React from 'react';
import PropTypes from 'prop-types';
import s from './BaseInput.module.scss';

export const BaseInput = ({ name, value, onChange,type,incorrect,message}) => {
  function handleChange(e) {
    const  value  = e.target.value;
    onChange( name, value );
  }
  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.inputName}>
        {name}
      </label>
        <input placeholder={name} className={s.input} type={type} id={name} name={name} value={value} onChange={(e) => handleChange(e)} required />
        {incorrect&&<span>{message}</span>}
    </div>
  );
};

BaseInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func,
  type: PropTypes.string,
  incorrect: PropTypes.bool,
  message: PropTypes.string,
};

