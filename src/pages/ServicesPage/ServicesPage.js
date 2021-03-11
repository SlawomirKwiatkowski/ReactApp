import React from 'react';
import { DefaultBannerTop } from 'src/components/DefaultBannerTop/DefaultBannerTop';
import { Default } from 'src/templates/Default';

import { ScrollToNavigation } from 'src/components/ScrollToNavigation/ScrollToNavigation';
import { ContentSection } from 'src/components/ContentSection/ContentSection';
import Slogan from 'src/components/Slogan/Slogan';
import { SectionItems } from 'src/mocks/SectionItems';
import bannerServicesTop from 'src/assets/img/OurServicesBanner.png';
import { BannerBottom } from 'src/components/BannerBottom/BannerBottom';
import s from './ServicesPage.module.scss';

import ServicesBannerBottom from 'src/assets/img/ServicesBannerBottom.png';
const text = 'Services For institutional Clients';
const style = {
  background: `url("${bannerServicesTop}")`,
  backgroundSize: 'cover',
  backgroundPosition: '0% 60%',
};

export const ServicesPage = () => {
  return (
    <Default className={s.servicesPage}>
      <DefaultBannerTop text={text} style={style} />
      <ScrollToNavigation navItems={SectionItems} />
      <ContentSection props={SectionItems[0]} />
      <ContentSection props={SectionItems[1]} />
      <Slogan />
      <ContentSection props={SectionItems[2]} />
      <BannerBottom img={ServicesBannerBottom} />
    </Default>
  );
};
