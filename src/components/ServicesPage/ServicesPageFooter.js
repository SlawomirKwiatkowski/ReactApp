import React from 'react'
import FooterBottomPart from "../Footer/FotterBottomPart"
import bannerBottom  from "../img/ServicesBannerBottom.png"

import "./ServicesPageFooter.scss"

const ServicesPageFooter= ()=>{

    return(
        <div className="footer">
      <div className="servicesBannerBottom">
      
        <img src={bannerBottom} alt="People in car image" />
        </div>

        <FooterBottomPart/>
        </div>

    )
}

export default ServicesPageFooter;