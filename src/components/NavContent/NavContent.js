import React from 'react';
import PropTypes from 'prop-types';

import s from './NavContent.module.scss';

const NavContent = ({ navItems }) => {
  return (
    <div className={s.navPanel}>
      {navItems.map((item) => (
        <a href={item.title} key={item.id}>
          {item.title}
        </a>
      ))}

      <h1>
        Trust & Estate
        <br /> Planning
      </h1>
      <h1>
        Citizenship &<br /> Residency Options
      </h1>
      <h1>
        Family Office
        <br /> Service
      </h1>
    </div>
  );
};
NavContent.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      firstText: PropTypes.string,
      secondText: PropTypes.string,
      firstButton: PropTypes.string,
      secondButton: PropTypes.string,
    }),
  ),
};

export default NavContent;
