import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import SectionItems from './SectionOurOfficesItems';
import { BaseButton } from '../BaseButton';

import ZurichImg from '../../assets/img/Zurich.png';

import s from './SectionOurOffices.module.scss';

const SectionOurOffices = () => {
  const [imgSrc, setImgSrc] = useState(ZurichImg);
  const [click, setClick] = useState(false);
  const [activeOffice, setActiveOffice] = useState('Zurich');

  const handleClick = (img, title) => {
    console.log(img, click);
    setActiveOffice(title);
    setImgSrc(img);
    setClick(true);
    console.log(click);
    console.log(activeOffice);
  };

  const places = SectionItems.map((item) => (
    <li
      key={item.title}
      onClick={() => {
        handleClick(item.img, item.title);
      }}>
      <a>
        <div className={item.title == activeOffice ? s.cityListActive : s.cityList}>
          <span>{item.title}</span>

          {item.country}
        </div>
      </a>
    </li>
  ));

  return (
    <div className={s.sectionOurOffice}>
      <CSSTransition
        in={click}
        appear={true}
        timeout={10000}
        classNames={{
          enterActive: s['fadeEnterActive'],
          enter: s['fadeEnter'],
          exitActive: s['fadeExit'],
          exit: s['fadeExitActive'],
          appear: s['fadeApear'],
          appearActive: s['fadeAppearActive'],
        }}
        onEntered={() => setClick(false)}>
        <div className={s.imgWrapper}>
          <div>
            <img className={s.img} src={imgSrc} key={imgSrc} alt="Zurich image" />
          </div>
        </div>
      </CSSTransition>
      <nav className={s.officeNav}>
        <h3>Our Offices</h3>
        <ul>{places}</ul>
      </nav>

      <BaseButton theme="primary" size="medium3" className={s.button}>
        Contact Us
      </BaseButton>
    </div>
  );
};

export default SectionOurOffices;
