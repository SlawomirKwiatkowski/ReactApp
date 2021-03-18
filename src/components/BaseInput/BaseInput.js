import React from 'react';
import PropTypes from 'prop-types';
import s from './BaseInput.module.scss';

export const BaseInput = ({ name, value, onChange,type }) => {
  function handleChange(e) {
    console.log("typ", e.target.type)
    const  value  = e.target.value;
    console.log("value",value,"name:",name)
    onChange( name, value );
  }
  return (
    <div className={s.inputContainer}>
      <label htmlFor={name} className={s.inputName}>
        {name}
      </label>
        <input placeholder={name} className={s.input} type={type} id={name} name={name} value={value} onChange={(e) => handleChange(e)} required />
    </div>
  );
};

BaseInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func,
  type: PropTypes.string,
};
