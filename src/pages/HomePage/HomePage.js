import React from 'react';

import { SectionOurPromise } from 'src/components/SectionOurPromise/SectionOurPromise';
import { SectionOurOfficesBetter } from 'src/components/SectionOurOfficesBetter/SectionOurOfficesBetter';
import SectionOurTeam from 'src/components/SectionOurTeam/SectionOurTeam';
import { BannerBottom } from 'src/components/BannerBottom/BannerBottom';
import { SectionOurServices } from 'src/components/SectionOurServices/SectionOurServices';

import { Hero } from 'src/components/Hero/Hero';
import { Default } from 'src/templates/Default';

import bannerBottom from 'src/assets/img/bannerBottom.png';

const text = 'Lorem ipsum dolor sit amert';
const textButton = 'Lorem';
const styleBannerBottom = {
  bottom: '100px',
};
export const HomePage = () => {
  return (
    <Default className="homePage">
      <Hero />

      <main>
        <SectionOurPromise />
        <SectionOurServices />
        <SectionOurOfficesBetter />
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
