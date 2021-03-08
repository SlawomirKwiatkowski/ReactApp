import React, { useState } from 'react';

import { offices } from 'src/mocks/offices';
import { BaseButton } from '../BaseButton/BaseButton';
import s from './SectionOurOfficesBetter.module.scss';
import classnames from 'classnames';

export const SectionOurOfficesBetter = () => {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <div className={s.sectionOurOffice}>
      <div className={s.imgWrapper}>
        <div>
          {offices.map((item, index) => (
            <img
              className={classnames(s.img, { [s.imgActive]: index === activeOffice })}
              src={item.img}
              key={index}
              alt={`${item.title} office image`}
            />
          ))}
        </div>
      </div>

      <nav className={s.officeNav}>
        <h3>Our Offices</h3>
        <ul>
          {offices.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveOffice(index);
              }}>
              <a>
                <div
                  className={classnames(s.cityList, {
                    [s.cityListActive]: index === activeOffice,
                  })}>
                  <span>{item.title}</span>

                  {item.country}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <BaseButton theme="primary" size="medium3" className={s.button}>
        Contact Us
      </BaseButton>
    </div>
  );
};
