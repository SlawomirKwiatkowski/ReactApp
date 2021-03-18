import React from 'react';

import { DefaultBannerTop } from 'src/components/DefaultBannerTop/DefaultBannerTop';
import { Default } from 'src/templates/Default';
import { ContactForm } from 'src/components/ContactForm/ContactForm';

import bannerContactUsTop from 'src/assets/img/ContactUsBannerTop.png';

const style = {
  background: `url("${bannerContactUsTop}")`,
  backgroundSize: 'cover',
};
export const ContactUsPage = () => {
  return (
    <Default>
      <DefaultBannerTop text={'Contact Us'} style={style} />
      <ContactForm />
    </Default>
  );
};
