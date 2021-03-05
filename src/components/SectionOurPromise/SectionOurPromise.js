import React from 'react';
import { BaseButton } from '../BaseButton/BaseButton';

import s from './SectionOurPromise.module.scss';

const SectionOurPromise = () => {
  return (
    <div className={s.sectionOurPromise}>
      <h1 className={s.h1}>Our promise</h1>
      <h2>
        We create structures that simplify working with assets, preserving their value and
        facilitate transmission between people, companies, across borders and over generations.
        Committed, personal, transparent and with international, first-class expertise.
      </h2>
      <BaseButton theme="primary" size="medium2" className={s.button}>
        More about us
      </BaseButton>
    </div>
  );
};

export default SectionOurPromise;
