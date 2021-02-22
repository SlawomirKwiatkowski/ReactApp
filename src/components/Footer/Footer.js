import React from "react";
import bannerBottom from "../img/bannerBottom.png";

import { BaseButton } from "../BaseButton";
import FooterBottomPart from "./FotterBottomPart"
// import TextOnBootomBanner from "./TextOnBottomBanner"



import "./Footer.scss";
const Footer = () => {


  return (
    <footer className="footer">
      <div className="bannerBottom">
      
      <div className="textOnBottomBanner">
      <h1>Lorem ipsum<br/> dolor sit amert</h1>
        <BaseButton theme="primary" size="medium">
          Lorem
        </BaseButton>
        
        </div>
        <img src={bannerBottom} alt="People in car image" />


      </div>
      <FooterBottomPart/>


    </footer>
  );
};

export default Footer;
