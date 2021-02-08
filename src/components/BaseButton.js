import React from 'react';
import s from './BaseButton.module.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const BaseButton = ({ children, type, onClick, theme = 'primary', size = 'medium' }) => {
  return (
    <button className={classnames(s.btn, s[`theme-${theme}`], s[`size-${size}`])} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
};
BaseButton.defaultProps = {
  children: null,
};
BaseButton.propTypes = {
  type: PropTypes.node,
};
BaseButton.propTypes = {
  onClick: PropTypes.bool,
};
BaseButton.propTypes = {
  theme: PropTypes.node,
};
BaseButton.propTypes = {
  size: PropTypes.node,
};