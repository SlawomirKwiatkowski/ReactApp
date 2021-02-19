import React,{useState} from "react";
// import { Link } from "react-router-dom";
// import {NavLink, Route, Switch} from 'react-router-dom';

// import { BaseButton } from '../BaseButton';
import SectionItems from "./SectionItems";
import { BaseButton } from "../BaseButton";

import ZurichImg from '../img/Zurich.png';
// import NicosiaImg from '../img/Nicosia.png';
// import PanamaCityImg from '../img/PanamaCity.png'


import "./content.scss";


const SectionOurOffices = () => {

  const[imgSrc,setImgSrc]=useState(ZurichImg);


  const handleClick =(img)=>{
    console.log(img);
    setImgSrc(img)
  }

  const places = SectionItems.map((item) => (
    <li  key={item.title} onClick={()=>{handleClick(item.img)}} >
      <a >
        <div>
          <span>{item.title}</span>
          
          {item.country}
        </div>
      </a>
    </li>
  ));

  return (
    <div className="sectionOurOffice">
      <img src={imgSrc} alt="Zurich image" />

      <nav className="officeNav">
        <h3>Our Offices</h3>
        <ul>{places}</ul>
      </nav>
      <BaseButton theme="primary" size="medium2">
        Contact Us
      </BaseButton>
    </div>
  );
};

export default SectionOurOffices;
