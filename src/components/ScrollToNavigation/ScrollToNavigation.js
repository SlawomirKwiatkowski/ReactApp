import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import s from './ScrollToNavigation.module.scss';

export const ScrollToNavigation = ({ navItems }) => {
  return (
    <div className={classnames('container', s.navPanel)}>
      {navItems.map((item) => (
        <a className={s.link} href={'#' + item.title} key={item.id}>
          {item.title}
        </a>
      ))}
    </div>
  );
};
ScrollToNavigation.propTypes = {
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
