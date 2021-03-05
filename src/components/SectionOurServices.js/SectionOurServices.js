import React from 'react';

import { BaseButton } from '../BaseButton';

import s from './SectionOurServices.module.scss';

const SectionOurServices = () => {
  return (
    <div className={s.sectionOurServices}>
      <div className={s.sectionOurServicesLeft}>
        {/* <hr /> */}
        <h1 style={{ float: 'left' }}>Our services</h1>
      </div>
      <div className={s.sectionOurServicesRight}>
        <h2>
          <h3 style={{ float: 'left' }}>For private client</h3>
          <BaseButton
            style={{ float: 'left' }}
            theme="arrowbutton"
            size="small2"
            className={s.button}>
            <span>&#8594;</span>
          </BaseButton>
        </h2>

        <h2>
          <h3 style={{ float: 'left' }}>For private client</h3>
          <BaseButton
            style={{ float: 'left' }}
            theme="arrowbutton"
            size="small2"
            className={s.button}>
            <span>&#8594;</span>
          </BaseButton>
        </h2>
      </div>
    </div>
  );
};

export default SectionOurServices;
