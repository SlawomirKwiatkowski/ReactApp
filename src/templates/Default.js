import React from 'react';
// import Footer from '../components/Footer/Footer';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Default({ children, className }) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Default.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
