import React from 'react';
import PropTypes from 'prop-types';

import n from './NavContent.module.scss';
// import { SectionItems } from '../ContentSection/SectionItems';

const NavContent = ({ props }) => {
  console.log(props);

  return (
    <div className={n.navPanel}>
      {/* {props.map((item) => (
        <a href={item.title} key={item.id}>
          {item.title}
        </a>
      ))} */}

      <h1>
        Trust & Estate
        <br /> Planning
      </h1>
      <h1>
        Citizenship &<br /> Residency Options
      </h1>
      <h1>
        Family Office
        <br /> Service
      </h1>
    </div>
  );
};
NavContent.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      firstText: PropTypes.string,
      secondText: PropTypes.string,
      firstButton: PropTypes.string,
      secondButton: PropTypes.string,
    }),
  ),
};

// NavContent.propTypes = {
//   props: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string,
//         firstText: PropTypes.string,
//         secondText: PropTypes.string,
//         firstButton: PropTypes.string,
//         secondButton: PropTypes.string,
//       }),
//     ),
//   ),
// };

export default NavContent;
