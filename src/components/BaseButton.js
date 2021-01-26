import React from 'react';
import s from './BaseButton.module.scss';
import classnames from 'classnames';

export const BaseButton = ({ children, type, onClick, theme = 'primary', size = 'medium' }) => {
  return (
    <button className={classnames(s.btn, s[`theme-${theme}`], s[`size-${size}`])} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
