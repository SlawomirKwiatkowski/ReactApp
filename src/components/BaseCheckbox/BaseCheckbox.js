import React from 'react';
import PropTypes from 'prop-types';
import s from './BaseCheckbox.module.scss';

export const BaseCheckbox = ({ name, value, onChange }) => {

    function handleChange(e) {
        console.log("typ", e.target.type)
        const  value  = e.target.checked;
        console.log("value",value,"name:",name)
        onChange( name, value );
      }

    return(
        <div className={s.inputContainer}>
            <input type="checkbox" name={name} id={name} checked={value} className={s.checkBox} onChange={(e) => handleChange(e)}/>
            <label className={s.inputName}>
          I accept the Terms and Conditions
          </label>
        </div>
    )
}

BaseCheckbox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool, 
    onChange: PropTypes.func,
  };