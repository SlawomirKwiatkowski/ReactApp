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
  const [errors,setErrors]=useState({
    Name: false,
    Surname: false,
    Gender:false,
    Age: false,
    Bio: false,
    Accept:false,
  })

  const messages = {
    nameIncorrect: "Wrong Name",
    surnameIncorect: "Wrong Surname",
    ageIncorrect: "Wrong Age",
    genderIncorrect:"Choose Gender",
    bioIncorrect: "Wrong file",
    acceptIncorrect: "Must accept",

    
  }




  const handleChange=( name, value )=>{
    console.log(name,value)

    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    const validation =  formValidation();
    console.log(validation)
    console.log(formData);
    if(validation.correct){
      setFormData({
        Name: '',
        Surname:'',
        Gender:'',
        Age:'',
        Bio:'',
        Accept: false,

      }
      )
      setErrors(
        {
          Name: false,
          Surname: false,
          Age: false,
          Bio: false,
          Accept:false,
        }
  
      )

     

  }else{
    setErrors({
      Name: !validation.name,
      Surname: !validation.surname,
      Age: !validation.age,
      Bio: false,
      Gender: !validation.gender,
      Accept:!validation.accept,
    }
    )
  }
  console.log(formData)}

  const formValidation=()=>{
    let name=false;
    let surname=false;
    let age=false;
    let gender = false;
    let accept= false;
    let correct = false;
    console.log(formData.Gender.length)
    

    if(formData.Name.length>0 && formData.Name.indexOf(' ')===-1 ){
      name=true;
    }
    if(formData.Name.length>0 && formData.Name.indexOf(' ')===-1 ){
      surname=true;
    }
    if(formData.Age>0 && formData.Age<125 && formData.Age.length>0){
      age=true;
    }
    if(formData.Accept){
      accept=true;
    }
 
    if(formData.Gender.length>0){
      gender=true;
    }
    if(name && surname && age && accept && gender){
      correct=true;
    }
    
    return({
      correct,
      gender,
      name,
      surname,
      age,
      accept
    })



  }


  return (
    <div className={classnames('container', s.formContainer)}>
      <div className={s.sectionLeft}>
        <div className={s.title}> Contact Us</div>
      </div>
      <div className={s.sectionRight}>
      <form className={s.contactForm} onSubmit={(e)=>handleSubmit(e)}>
        <BaseInput name={'Name'} value={formData.Name} onChange={handleChange} type={"text"} incorrect={errors.Name} message={messages.nameIncorrect} />
        <BaseInput name={'Surname'} value={formData.Surname} onChange={handleChange} type={"text"} incorrect={errors.Surname} message={messages.surnameIncorrect}/>
        <BaseSelect name={'Gender'} value={formData.Gender} onChange={handleChange} incorrect={errors.Gender} message={messages.genderIncorrect}/>
        <BaseInput name={'Age'} value={formData.Age} onChange={handleChange} type={"number"} incorrect={errors.Age} message={messages.ageIncorrect} />
        <BaseCheckbox name={'Accept'} value={formData.Accept} onChange={handleChange} incorrect={errors.Accept} message={messages.acceptIncorrect}/>
        <BaseFileUpload name={"Bio"} value={formData.Bio} onChange={handleChange}/>
        <div className={s.buttonContainer}>
        <button className={s.submitButton} type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};
