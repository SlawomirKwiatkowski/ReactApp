import React from 'react';
import classnames from 'classnames';

import { BaseButton } from 'src/components/BaseButton/BaseButton';
import ourTeam from 'src/assets/img/OurTeam.png';
import s from './SectionOurTeam.module.scss';

const SectionOurTeam = () => {
  return (
    <section className={classnames('container', s.sectionOurTeam)}>
      <div className={s.text}>
        <h1>Met our dedicated Team.</h1>

        <h2>
          Lorem ipsum dolor sit amet, consectuer adpiscing elit, sed dam nonummy nibh euismod
          tincidunt.
        </h2>
        <BaseButton theme="primary" size="small4">
          Our team
        </BaseButton>
      </div>
      <div className={s.imgWrapper}>
        <div>
          <img src={ourTeam} alt="Our Team image" />
        </div>
      </div>
    </section>
  );
};

export default SectionOurTeam;
