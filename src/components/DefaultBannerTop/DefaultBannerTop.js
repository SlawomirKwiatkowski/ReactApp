import React from 'react';
import PropTypes from 'prop-types';

import s from './DefaultBannerTop.module.scss';
const DefaultBannerTop = ({ text, style }) => {
  // const style1 = style + ;
  // const style2 = { background: `url("${img}")`, backgroundSize: 'cover' };
  // console.log(style1);
  // console.log(style2);
  return (
    // <div className={s.header} style={{ background: `url("${img}")`, backgroundSize: 'cover' }}>
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

export default DefaultBannerTop;
