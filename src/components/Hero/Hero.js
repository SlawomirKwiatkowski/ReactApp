import React from 'react';
import { BaseButton } from '../BaseButton';
import classnames from "classnames";
import s from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={s.hero}>
      <div className={classnames("container", s.container)}>
        <div className={s.banner}>
          <div className={s.bannerInner}>
            Keeping assets valuable. For you and for generations to come.
            <BaseButton theme="onbanner" size="medium" className={s.button}>
              Our Services
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
