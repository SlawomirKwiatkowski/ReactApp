import React from 'react';
import { BaseButton } from '../BaseButton';
import PropTypes from 'prop-types';
// import bannerBottom from '../../assets/img/bannerBottom.png';

import b from './BannerBottom.module.scss';

const BannerBottom = ({ img, imgDsc, text, textButton }) => {
  console.log(img);
  if (!text) {
    return (
      <div className={b.bannerBottom}>
        <div className={b.container}>
          <img src={img} alt={imgDsc} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={b.bannerBottom}>
        <div className={b.container}>
          <img src={img} alt={imgDsc} />
        </div>

        <div className={b.bannerInner}>
          <h1>{text}</h1>
          <BaseButton theme="primary" size="medium" className={b.button}>
            {textButton}
          </BaseButton>
        </div>
      </div>
    );
  }
};

BannerBottom.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  textButton: PropTypes.string,
  imgDsc: PropTypes.string,
};

export default BannerBottom;
