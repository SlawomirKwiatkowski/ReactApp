import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { NavLink } from 'react-router-dom';
import { HeaderItems } from './HeaderItems';
import { BaseButton } from '../BaseButton';
import logo from '../../assets/img/logo.svg';

import s from './Header.module.scss';

const Header = () => {
  const [menuClick, setMenuclick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    if (!menuClick) {
      setMenuclick(!menuClick);
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 1100) {
      setMenuclick(false);
    }
  };
  window.addEventListener('resize', handleResize);

  return (
    <>
      <nav className={s.NavbarItems}>
        <h1>
          <img src={logo} alt="logo" className={s.navbarLogo} />
        </h1>
        <div className={s.menuIcon} onClick={handleMenuClick}>
          <i className={menuClick ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
        </div>
        <CSSTransition
          in={showMenu}
          enter={true}
          exit={true}
          onExited={() => {
            setMenuclick(false);
          }}
          timeout={{
            enter: 500,
            exit: 400,
          }}
          classNames={{
            enterActive: s['fadeEnterActive'],
            enter: s['fadeEnter'],
            exitActive: s['fadeExit'],
            exit: s['fadeExitActive'],
          }}>
          <ul className={menuClick ? s.navMenuActive : s.navMenu}>
            {HeaderItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={s.navLinks}
                    to={item.url}
                    onClick={() => console.log('działa')}
                    exact={item.exact ? item.exact : false}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </CSSTransition>
        <BaseButton theme="empty" size="small" className={s.emptyButton} />
        <BaseButton theme="primary" size="medium" className={s.button}>
          Contact Us
        </BaseButton>
      </nav>
    </>
  );
};

export default Header;
