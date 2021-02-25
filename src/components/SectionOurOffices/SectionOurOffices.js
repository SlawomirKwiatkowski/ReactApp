import React, { useState } from 'react';

import SectionItems from './SectionOurOfficesItems';
import { BaseButton } from '../BaseButton';

import ZurichImg from '../../assets/img/Zurich.png';

// import './content.scss';
import s from './SectionOurOffices.module.scss';

const SectionOurOffices = () => {
  const [imgSrc, setImgSrc] = useState(ZurichImg);

  const handleClick = (img) => {
    console.log(img);
    setImgSrc(img);
  };

  const places = SectionItems.map((item) => (
    <li
      key={item.title}
      onClick={() => {
        handleClick(item.img);
      }}>
      <a>
        <div className={s.cityList}>
          <span>{item.title}</span>

          {item.country}
        </div>
      </a>
    </li>
  ));

  return (
    <div className={s.sectionOurOffice}>
      <nav className={s.officeNav}>
        <h3>Our Offices</h3>
        <ul>{places}</ul>
      </nav>
      <img src={imgSrc} alt="Zurich image" />

      <BaseButton theme="primary" size="medium3" className={s.button}>
        Contact Us
      </BaseButton>
    </div>
  );
};

export default SectionOurOffices;
