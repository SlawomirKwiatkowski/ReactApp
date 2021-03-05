import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { BaseButton } from '../BaseButton';
import { ButtonItems } from 'components/ContentSection/ButtonItems';

import s from './ContentSection.module.scss';

const ContentSection = ({ props }) => {
  const [click, setClick] = useState(false);
  const [showBtnMenu, setShowBtnMenu] = useState(false);
  const [entered, setEntered] = useState(false);

  const handleClick = () => {
    console.log(entered);
    if (click) {
      setShowBtnMenu(false);
    } else {
      setShowBtnMenu(true);
      setClick(true);
    }
  };
  return (
    <div className={s.contentSection} id={props.title}>
      <div className={s.contentSectionLeft}>
        <h1 className={s.h1}>{props.title}</h1>
      </div>
      <div className={s.contentSectionRight}>
        <div className={s.contentSectionRightText}>
          <h2 className={s.h2}>{props.firstText}</h2>
          <h3 className={s.h3}>{props.secondText}</h3>
        </div>
        <div className={s.contentSectionRightButton}>
          <h4>
            {props.firstButton}
            <h5 className={s.button}>
              <BaseButton
                style={{ float: 'left' }}
                theme="arrowbutton"
                size="small3"
                onClick={handleClick}>
                <i className={!click ? 'fas fa-plus' : 'fas fa-times'}></i>
              </BaseButton>
            </h5>
          </h4>
          <CSSTransition
            in={showBtnMenu}
            enter={true}
            exit={true}
            onExit={() => {
              setEntered(false);
            }}
            onExited={() => {
              setEntered(false);
              setClick(false);
            }}
            onEntered={() => {
              setEntered(true);
            }}
            timeout={{
              enter: 400,
              exit: 400,
            }}
            classNames={{
              enterActive: s['fadeEnterActive'],
              enter: s['fadeEnter'],
              exitActive: s['fadeExit'],
              exit: s['fadeExitActive'],
            }}>
            <ul className={click ? s.buttonMenuActive : s.buttonMenu}>
              {ButtonItems.map((item, index) => {
                return (
                  <li key={index} className={entered ? s.buttonLinksActive : s.buttonLinks}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </CSSTransition>

          <h4>{props.secondButton}</h4>
        </div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  props: PropTypes.array,
  title: PropTypes.string,
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  firstButton: PropTypes.string,
  secondButton: PropTypes.string,
};

export default ContentSection;
