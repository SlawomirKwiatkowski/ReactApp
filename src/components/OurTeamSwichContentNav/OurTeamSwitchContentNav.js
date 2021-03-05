import React from 'react';
import { NavLink } from 'react-router-dom';

import s from 'components/OurTeamSwichContentNav/OurTeamSwitchContentNav.module.scss';

const Cities = ['Zurich', 'Nicosia', 'Panama City'];

const OurTeamSwitchContentNav = () => {
  return (
    <div className={s.teamSwitchContent}>
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

export default OurTeamSwitchContentNav;
