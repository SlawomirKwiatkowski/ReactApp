import React from "react";
import PropTypes from "prop-types";
import { BaseButton } from "../BaseButton";
// import {SectionItems} from "./SectionItems"

import "./Content.scss";

const ContentSection = ({ props }) => {
  // console.log(SectionItems[0])
  // const[title,firstText,secondText,...rest]=SectionItems[0]
  // console.log(rest)

  console.log(props);

  return (
    <div className="contentSection">
      <div className="contentSectionLeft">
        <h1>{props.title}</h1>
      </div>
      <div className="contentSectionRight">
        <div className="contentSectionRightText">
          <h2>{props.firstText}</h2>
          <h3>{props.secondText}</h3>
        </div>
        <div className="contentSectionRightButton">
            <h4>{props.firstButton}
            <h5><BaseButton style={{ float: "left" }} theme="empty" size="small3">
            <span>+</span>
          </BaseButton></h5>
            </h4>

            <h4>{props.secondButton}</h4>
        </div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  props: PropTypes.node,
};

// ContentSection.propTypes = {
//     props: PropTypes.shape({
//         title: PropTypes.string,
//         firstText: PropTypes.string,
//         secondText: PropTypes.string,
//     })
// }
ContentSection.propTypes = {
  title: PropTypes.string,
};

ContentSection.propTypes = {
  firstText: PropTypes.string,
};

ContentSection.propTypes = {
  secondText: PropTypes.string,
};

ContentSection.propTypes = {
  firstButton: PropTypes.string,
};

ContentSection.propTypes = {
  secondButton: PropTypes.string,
};
export default ContentSection;
