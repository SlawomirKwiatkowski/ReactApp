import React from 'react';
import PropTypes from 'prop-types';

import s from './DefaultBannerTop.module.scss';
const DefaultBannerTop = ({ text, img }) => {
  return (
    <div className={s.header} style={{ background: `url("${img}")`, backgroundSize: 'cover' }}>
      <div className={s.bannerServicesTop}>
        <h4>{text}</h4>
      </div>
    </div>
  );
};

DefaultBannerTop.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
};

export default DefaultBannerTop;
