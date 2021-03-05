import React from 'react';
import { NavLink } from 'react-router-dom';

import s from 'components/OurTeamSwichContentNav/OurTeamSwitchContentNav.module.scss';

const Cities = ['Zurich', 'Nicosia', 'Panama City'];

const OurTeamSwitchContentNav = () => {
  // const list = Cities.map(city=>{
  //     <li key={city}>
  //         <Link to={`/team/${city}`}>{city}</Link>
  //     </li>
  // })

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
