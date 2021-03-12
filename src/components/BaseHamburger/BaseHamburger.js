import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import s from './BaseHamburger.module.scss';

export const BaseHamburger = ({ open }) => {
  const [click, setClick] = useState(false);
  return (
    <div className={s.baseHamburger}>
      <div
        className={classnames(s.baseHamburgerWrapper, { [s.opened]: open === true })}
        onClick={() => {
          setClick(!click);
        }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
BaseHamburger.propTypes = {
  open: PropTypes.bool,
};
