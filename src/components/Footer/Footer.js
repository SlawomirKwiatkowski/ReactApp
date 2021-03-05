import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

import { BaseButton } from '../BaseButton';

import logo from '../../assets/img/logo.svg';
import FooterContactList from './FooterContactList';

import f from './Footer.module.scss';

const Footer = () => {
  const places = FooterContactList.map((item) => (
    <ul key={item.city} className={f.contactAddress}>
      <h2>{item.city}</h2>
      <h3>{item.address}</h3>
      <h4>
        {item.mail} <br /> {item.phoneNumber}
      </h4>
    </ul>
  ));

  return (
    <footer className={f.container}>
      <div className={f.row}>
        <ul className={f.contact}>
          <h2>Contact</h2>
          <h1>How can we assist you?</h1>
          <BaseButton theme="primary" size="medium2" className={f.button}>
            Contact Us
          </BaseButton>
        </ul>

        {places}
      </div>
      <div className={f.row2}>
        <TiSocialLinkedinCircular
          size={45}
          style={{ fill: '#C5AD8F', padding: '0', paddingTop: '0px' }}
        />
        <h1>Imprint</h1>
        <h1>GTC</h1>
        <h1>Privacy Policy</h1>

        <h2>
          <img src={logo} alt="logo" />
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
