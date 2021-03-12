import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { BaseButton } from 'src/components/BaseButton/BaseButton';
import { BaseHamburger } from 'src/components/BaseHamburger/BaseHamburger';
import logo from 'src/assets/img/logo.svg';

import v from 'src/assets/styles/variable.module.scss';
import s from './Header.module.scss';

export const Header = ({ HeaderItems }) => {
  const [menuClick, setMenuclick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuBg, setShowMenuBg] = useState(false);
  const handleMenuClick = () => {
    if (!menuClick) {
      setMenuclick(!menuClick);
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setMenuclick(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowMenuBg(true);
      } else {
        setShowMenuBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classnames(s.container, { [s.containerActive]: showMenuBg })}>
      <nav className={s.NavbarItems}>
        <NavLink to="/">
          <img src={logo} alt="logo" className={s.navbarLogo} />
        </NavLink>
        <div className={s.menuIcon} onClick={handleMenuClick}>
          <BaseHamburger open={showMenu} />
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
    </div>
  );
};

Header.propTypes = {
  HeaderItems: PropTypes.arrayOf(PropTypes.string),
};
