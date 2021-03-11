import React from 'react';
import PropTypes from 'prop-types';

import s from './DefaultBannerTop.module.scss';
export const DefaultBannerTop = ({ text, style }) => {
  return (
    <div className={s.header} style={style}>
      <div className={s.bannerServicesTop}>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

DefaultBannerTop.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
};
