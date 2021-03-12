import React from 'react';
import { BaseButton } from 'src/components/BaseButton/BaseButton';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import b from './BannerBottom.module.scss';

export const BannerBottom = ({ img, imgDsc, text, textButton, style }) => {
  return (
    <div className={b.bannerBottom}>
      <div className={b.container}>
        <img src={img} alt={imgDsc} style={style} />
      </div>
      {text && (
        <div className={'container'}>
          <div className={b.bannerInner}>
            <h1>{text}</h1>
            <BaseButton theme="primary" size="medium" className={b.button}>
              {textButton}
            </BaseButton>
          </div>
        </div>
      )}
    </div>
  );
};

BannerBottom.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  textButton: PropTypes.string,
  imgDsc: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.string),
};
