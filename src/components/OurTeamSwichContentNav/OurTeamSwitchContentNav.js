import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import s from './OurTeamSwitchContentNav.module.scss';

const Cities = ['Zurich', 'Nicosia', 'Panama City'];

export const OurTeamSwitchContentNav = () => {
  return (
    <div className={classnames('container', s.teamSwitchContent)}>
      {Cities.map((city) => {
        return (
          <li key={city} className={s.link}>
            <NavLink to={`/team/${city}`}>{city}</NavLink>
          </li>
        );
      })}
    </div>
  );
};
