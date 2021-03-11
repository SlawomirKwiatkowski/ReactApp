import classnames from 'classnames';
import React from 'react';
import s from './Slogan..module.scss';

const Slogan = () => {
  return (
    <div className={classnames(s.slogan, 'container')}>
      <h1>
        “All we, we do out of conviction, with first-class expertise, foresighted and with maximum
        transparency.”
        <h2>Dimitar Jauch / CEO Leo Trust</h2>
      </h1>
    </div>
  );
};
export default Slogan;
