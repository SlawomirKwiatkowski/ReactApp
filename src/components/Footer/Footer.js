import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import PropTypes from 'prop-types';

import { BaseButton } from 'src/components/BaseButton/BaseButton';

import logo from 'src/assets/img/logo.svg';

import f from './Footer.module.scss';

export const Footer = ({ footerMainContact, footerContactList }) => {
  return (
    <footer className={f.container}>
      <div className={'container'}>
        <div className={f.row}>
          <ul className={f.contact}>
            <h2>{footerMainContact.title}</h2>
            <h1>{footerMainContact.text}</h1>
            <BaseButton theme="primary" size="medium3" className={f.button}>
              {footerMainContact.textInButton}
            </BaseButton>
          </ul>

          {footerContactList.map((item) => (
            <ul key={item.city} className={f.contactAddress}>
              <h2>{item.city}</h2>
              <h3>{item.address}</h3>
              <h4>
                {item.mail} <br /> {item.phoneNumber}
              </h4>
            </ul>
          ))}
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
      </div>
    </footer>
  );
};
Footer.propTypes = {
  footerMainContact: PropTypes.arrayOf(PropTypes.string),
  footerContactList: PropTypes.arrayOf(PropTypes.string),
};
