import React from "react"
import './App.css';
import logo from "./img/logo.svg";
import NavBar from './Navbar/Navbar';
import TextOnBanner from './TextOnBanner'
import {BrowserRouter as Router} from 'react-router-dom';

const BannerHero=()=>{
    return(
        <div className="navBar">
        <Router>
            
            <NavBar/>
            <TextOnBanner/>

        </Router>
        </div>

    );
}

export default BannerHero