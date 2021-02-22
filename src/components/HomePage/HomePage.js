import React from 'react';

import BannerHero from '../Header/BannerHero';
import Hero from '../Hero/Hero';
import Content from '../Content/Content';
import Default from '../../templates/Default';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <Default className="homePage">
      <header className={s.header}>
        <BannerHero />
      </header>

      <Hero />

      <main>
        <Content />
      </main>
    </Default>
  );
};

export default HomePage;
