import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderItems } from './HeaderItems';
import { BaseButton } from '../BaseButton';
import logo from '../../assets/img/logo.svg';

import n from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <>
        <nav className={n.NavbarItems}>
          <h1 className={n.navbarLogo}>
            <img src={logo} alt="logo" />
          </h1>
          {/* <div className={n.menu-icon}></div> */}
          <ul className={n.navMenu}>
            {HeaderItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={n.navLinks} //czy mogę {item.cName}
                    to={item.url}
                    onClick={() => console.log('działa')}
                    exact={item.exact ? item.exact : false}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <BaseButton theme="empty" size="small" className={n.emptyButton} />
          <BaseButton theme="primary" size="medium" className={n.button}>
            Contact Us
          </BaseButton>
        </nav>
      </>
    );
  }
}

export default Header;
