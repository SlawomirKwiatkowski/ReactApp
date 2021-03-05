import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import SectionItems from './SectionOurOfficesItems';
import { BaseButton } from '../BaseButton';

import ZurichImg from '../../assets/img/Zurich.png';

// import './content.scss';
// import './transition.css';
import s from './SectionOurOffices.module.scss';

const SectionOurOffices = () => {
  const [prevImg, setPrevImg] = useState(ZurichImg);
  //   const [betwenImg, setBetwenImg] = useState(ZurichImg);
  const [currentImg, setCurrentImage] = useState(ZurichImg);

  //   const [imgSrc, setImgSrc] = useState(ZurichImg);
  //   const [click, setClick] = useState(false);
  const [activeOffice, setActiveOffice] = useState('Zurich');
  const [second, setSecond] = useState(false);
  const [first, setFirst] = useState(true);

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

  const handleClick = (img1, title) => {
    if (first) {
      setFirst(false);
      setCurrentImage(img1);
    } else {
      setSecond(false);
      setPrevImg(img1);
    }
    setActiveOffice(title);
  };

  return (
    <div className={s.sectionOurOffice}>
      <CSSTransition
        in={first}
        timeout={{
          enter: 500,
          exit: 400,
        }}
        unmountOnExit={true}
        mountOnEnter={true}
        enter={true}
        onExited={() => (setSecond(true), console.log('wpierwszym odmontowanym: ', prevImg))}
        classNames={{
          enterActive: s['fadeEnterActive'],
          enter: s['fadeEnter'],
          exitActive: s['fadeExit'],
          exit: s['fadeExitActive'],
          //   appear: s['fadeApear'],
          //   appearActive: s['fadeAppearActive'],
        }}>
        <div className={s.imgWrapper}>
          <div>
            <img className={s.img} src={prevImg} key={prevImg} alt="Zurich image" />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={second}
        mountOnEnter={true}
        unmountOnExit={true}
        onExited={() => (setFirst(true), console.log('w drugim odmontowanym', currentImg))}
        timeout={{
          enter: 500,
          exit: 400,
        }}
        classNames={{
          enterActive: s['fadeEnterActive'],
          enter: s['fadeEnter'],
          exitActive: s['fadeExit'],
          exit: s['fadeExitActive'],
          //   appear: s['fadeApear'],
          //   appearActive: s['fadeAppearActive'],
        }}
        // onEntered={() => setClick(false)}
      >
        <div className={s.imgWrapper}>
          <div>
            <img className={s.img} src={currentImg} key={currentImg} alt="Zurich image" />
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
