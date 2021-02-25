import React from 'react';
import DefaultBannerTop from '../../components/DefaultBannerTop/DefaultBannerTop';
import Default from '../../templates/Default';

import NavContent from '../../components/NavContent/NavContent';
import ContentSection from '../../components/ContentSection/ContentSection';
import Slogan from './Slogan';
import { SectionItems } from '../../components/ContentSection/SectionItems';
import bannerServicesTop from '../../assets/img/OurServicesBanner.png';
import BannerBottom from '../../components/BannerBottom/BannerBottom';
import './Content.scss';

import ServicesBannerBottom from '../../assets/img/ServicesBannerBottom.png';
const text = 'Services For institutional Clients';

const ServicesPage = () => {
  return (
    <Default className="servicesPage">
      <DefaultBannerTop text={text} img={bannerServicesTop} />
      <NavContent props={SectionItems} />
      <ContentSection props={SectionItems[0]} />
      <ContentSection props={SectionItems[1]} />
      <Slogan />
      <ContentSection props={SectionItems[2]} />
      <BannerBottom img={ServicesBannerBottom} />
    </Default>
  );
};

export default ServicesPage;