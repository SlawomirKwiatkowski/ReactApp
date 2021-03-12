import React from 'react';
// import Footer from '../components/Footer/Footer';
import PropTypes from 'prop-types';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { FooterContactList } from 'src/mocks/FooterContactList';
import { FooterMainContact } from 'src/mocks/FooterMainContact';
import { HeaderItems } from 'src/mocks/HeaderItems';

export function Default({ children, className }) {
  return (
    <div className={className}>
      <Header HeaderItems={HeaderItems} />
      {children}
      <Footer footerContactList={FooterContactList} footerMainContact={FooterMainContact} />
    </div>
  );
}

Default.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
