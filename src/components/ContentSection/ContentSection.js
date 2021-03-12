import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { BaseButton } from 'src/components/BaseButton/BaseButton';
import { ButtonItems } from 'src/mocks/ButtonItems';
import { BaseCollapse } from 'src/components/BaseCollapse/BaseCollapse';

import s from './ContentSection.module.scss';
import classnames from 'classnames';

export const ContentSection = ({ props }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={classnames('container', s.contentSection)} id={props.title}>
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
          <BaseCollapse isOpened={click} tableItems={ButtonItems} />

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
