import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { BaseButton } from "../BaseButton";

import logo from '../img/logo.svg'
import FooterContactList from "./FooterContact";

import "./Footer.scss";


const FooterBottomPart=()=>{
    const places = FooterContactList.map((item) => (
        <ul key={item.city} className="contactAddres">
          <h2>{item.city}</h2>
          <h3>{item.address}</h3>
          <h4>
            {item.mail} <br /> {item.phoneNumber}
          </h4>
        </ul>
      ));

    return(
        <div className="container">
        <div className="row">
          <ul className="contact">
            <h2>Contact</h2>
            <h1>How can we assist you?</h1>
            <BaseButton theme="primary" size="medium">
              Contact Us
            </BaseButton>
          </ul>

          {places}
        </div>
        <div className="row2">
          <TiSocialLinkedinCircular
            size={50}
            style={{ fill: "#C5AD8F", padding: "auto", paddingLeft: "3%" }}
          />
          <h1>Imprint</h1>
          <h1>GTC</h1>
          <h1>Privacy Policy</h1>

          <h2>
            <img src={logo} alt="logo" />
          </h2>
        </div>
        
      </div>

    )
}

export default FooterBottomPart