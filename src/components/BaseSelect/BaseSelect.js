import React from 'react';
import PropTypes from 'prop-types';

import {genderItems} from 'src/mocks/genderItems'

import s from './BaseSelect.module.scss'
export const BaseSelect = ({ name, value, onChange })=>{
    function handleChange(e) {
        const value=e.target.value;
        onChange( name, value );

    }

    return(
        <div className={s.inputContainer}>
        <label className={s.inputName}>
            {name}
            </label>
            <select value={value} className={s.select} onChange={(e)=>handleChange(e)}>
                {genderItems.map((item)=>{return(
                    <option value={item} key={item} className={s.items}>{item}</option>
                    )})}

            </select>
        
        </div>


    )
}

BaseSelect.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string, 
    onChange: PropTypes.func,
  };
  