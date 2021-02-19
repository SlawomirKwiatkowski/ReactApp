import React from 'react'

import NavContent from "./NavContent"
import ContentSection from "./ContentSection"
import Slogan from "./Slogan"
import {SectionItems} from "./SectionItems"


import "./Content.scss"
const Content = ()=>{
    
    return(
        <div className="content">
            <NavContent />
            <ContentSection props={SectionItems.first}/>
            <ContentSection props={SectionItems.second}/>
            <Slogan/>
            <ContentSection props={SectionItems.third}/>
        
        </div>

    )
}

export default Content;