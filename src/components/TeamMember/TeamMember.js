import React from 'react';
import PropTypes from 'prop-types';

import s from './TeamMember.module.scss';
import { TeamMemberItems } from 'src/mocks/TeamMemberItems';

import TeamMemberImg from 'src/assets/img/TeamMemberImg.png';

const TeamMember = ({ name }) => {
  return (
    <div className={'container'}>
      <div className={s.teamCollcectionList}>
        {TeamMemberItems.map((item, index) => {
          return (
            <div key={index} className={s.teamCollectionItem}>
              <div className={s.imgWrapper}>
                <div>
                  <img className={s.img} src={TeamMemberImg} alt="Zurich image" />
                </div>
              </div>
              <div className={s.nameMember}>
                <div className={s.nameMemberText}>{name}</div>
                <div className={s.icon}>
                  <i className="far fa-envelope  fa-1x"></i>
                </div>
              </div>
              <div className={s.positionMember}>{item.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
TeamMember.propTypes = {
  name: PropTypes.string,
};

export default TeamMember;
