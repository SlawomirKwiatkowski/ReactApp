import React from 'react'
// import BannerHero from "../Header/BannerHero"
import Header from "./Header"
import Content from "./Content"
import ServicesPageFooter from "./ServicesPageFooter"

import "../ServicesPage/Content.scss"

const ServicesPage=()=>{
    
    return(
        <div className="servicesPage">
            <header>
        <Header/>
        </header>
        <main>
            <Content/>
        </main>
        <footer>
            <ServicesPageFooter/>
        </footer>
        </div>

    )
}

export default ServicesPage;