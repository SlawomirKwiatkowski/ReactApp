import React from 'react';
import PropTypes from 'prop-types';
import s from './BaseFileUpload.module.scss';

export const BaseFileUpload = ({name,value,onChange})=>{
    function handleChange(e) {
        console.log("typ", e.target.type)
        const  value  = e.target.files[0];
        console.log("value",value,"name:",name)
        onChange( name, value );
      }
    return(
      <div className={s.inputContainer}>
        {/* <label className={s.inputName}>
        PDF file:
        </label> */}
        <input className={s.input}  type="file" accept="application/pdf" id={name} name={name} value={value} onChange={(e) => handleChange(e)} />
      
      </div>

    )
}

BaseFileUpload.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string, 
    onChange: PropTypes.func,
  };