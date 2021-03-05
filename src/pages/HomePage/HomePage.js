import React from 'react';

import SectionOurPromise from '../../components/SectionOurPromise/SectionOurPromise';
import SectionOurServices from '../../components/SectionOurServices.js/SectionOurServices';
import SectionOurOffices from '../../components/SectionOurOffices/SectionOurOffices';
import SectionOurTeam from '../../components/SectionOurTeam/SectionOurTeam';
import BannerBottom from '../../components/BannerBottom/BannerBottom';

import Hero from '../../components/Hero/Hero';
import Default from '../../templates/Default';

import bannerBottom from '../../assets/img/bannerBottom.png';

const text = 'Lorem ipsum dolor sit amert';
const textButton = 'Lorem';
const styleBannerBottom = {
  bottom: '100px',
};
const HomePage = () => {
  return (
    <Default className="homePage">
      <Hero />

      <main>
        <SectionOurPromise />
        <SectionOurServices />
        <SectionOurOffices />
        <SectionOurTeam />
        <BannerBottom
          img={bannerBottom}
          imgDsc={'People in car image'}
          text={text}
          textButton={textButton}
          style={styleBannerBottom}
        />
      </main>
    </Default>
  );
};

export default HomePage;
