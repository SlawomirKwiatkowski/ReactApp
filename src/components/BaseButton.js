import React from 'react';
import s from './BaseButton.module.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const BaseButton = ({
  children,
  type,
  onClick,
  theme = 'primary',
  size = 'medium',
  className,
}) => {
  return (
    <button
      className={classnames(s.btn, className, s[`theme-${theme}`], s[`size-${size}`])}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.node,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
