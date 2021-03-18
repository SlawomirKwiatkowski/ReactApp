import React, { useState } from 'react';
import classnames from 'classnames';

import { BaseInput } from 'src/components/BaseInput/BaseInput';
import {BaseSelect} from 'src/components/BaseSelect/BaseSelect';
import {BaseCheckbox} from 'src/components/BaseCheckbox/BaseCheckbox';
import {BaseFileUpload} from 'src/components/BaseFileUpload/BaseFileUpload';

import s from './ContactForm.module.scss';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Surname:'',
    Gender:'',
    Age:'',
    Bio:'',
    Accept: false,
  });

  




  const handleChange=( name, value )=>{
    console.log(name,value)

    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("działa");

  }


  return (
    <div className={classnames('container', s.formContainer)}>
      <div className={s.sectionLeft}>
        <div className={s.title}> Contact Us</div>
      </div>
      <div className={s.sectionRight}>
      <form className={s.contactForm} onSubmit={(e)=>handleSubmit(e)}>
        <BaseInput name={'Name'} value={formData.name} onChange={handleChange} type={"text"} />
        <BaseInput name={'Surname'} value={formData.name} onChange={handleChange} type={"text"} />
        <BaseSelect name={'Gender'} value={formData.name} onChange={handleChange}/>
        <BaseInput name={'Age'} value={formData.name} onChange={handleChange} type={"number"} />
        <BaseCheckbox name={'Accept'} value={formData.name} onChange={handleChange}/>
        <BaseFileUpload name={"Bio"} value={formData.name} onChange={handleChange}/>
        <div className={s.buttonContainer}>
        <button className={s.submitButton} type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};
