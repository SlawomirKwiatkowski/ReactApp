import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../BaseButton';
// import {SectionItems} from "./SectionItems"

import c from './ContentSection.module.scss';

const ContentSection = ({ props }) => {
  // console.log(SectionItems[0])
  // const[title,firstText,secondText,...rest]=SectionItems[0]
  // console.log(rest)

  return (
    <div className={c.contentSection} id={props.title}>
      <div className={c.contentSectionLeft}>
        <h1>{props.title}</h1>
      </div>
      <div className={c.contentSectionRight}>
        <div className={c.contentSectionRightText}>
          <h2>{props.firstText}</h2>
          <h3>{props.secondText}</h3>
        </div>
        <div className={c.contentSectionRightButton}>
          <h4>
            {props.firstButton}
            <h5>
              <BaseButton style={{ float: 'left' }} theme="empty" size="small3">
                <span>+</span>
              </BaseButton>
            </h5>
          </h4>

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
