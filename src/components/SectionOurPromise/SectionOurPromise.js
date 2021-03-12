import React from 'react';
import { BaseButton } from 'src/components/BaseButton/BaseButton';
import classnames from 'classnames';

import s from './SectionOurPromise.module.scss';

export const SectionOurPromise = () => {
  return (
    <div className={classnames('container', s.sectionOurPromise)}>
      <div className={s.sectionOurPromiseInner}>
        <h1 className={s.title}>Our promise</h1>
        <h2>
          We create structures that simplify working with assets, preserving their value and
          facilitate transmission between people, companies, across borders and over generations.
          Committed, personal, transparent and with international, first-class expertise.
        </h2>
        <BaseButton theme="primary" size="medium2" className={s.button}>
          More about us
        </BaseButton>
      </div>
    </div>
  );
};
