import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {MenuItems}from "../MenuItems";
import {BaseButton} from '../BaseButton'
import logo from '../img/logo.svg';

class Navbar extends Component{

    render(){
        return(
            <>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src={logo} alt="logo"/>
                    </h1>
                <div className="menu-icon">


                </div>
                <ul className="nav-menu"> 
                    {MenuItems.map((item,index)=>{
                        return (
                            <li>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a> 
                            </li>
                        )
                        
                    })}

                </ul>
                <BaseButton theme="empty"
                size="small"/>
                <BaseButton
                theme="primary"
                size ="medium">Contact Us</BaseButton>


            </nav>
            </>


            )
    }
}

export default Navbar