import React from 'react';

import Default from '../../templates/Default';
import DefaultBannerTop from '../../components/DefaultBannerTop/DefaultBannerTop';
import TeamMember from '../../components/TeamMember/TeamMember';
import BannerBottom from '../../components/BannerBottom/BannerBottom';
import OurTeamSwitchContentNav from 'components/OurTeamSwichContentNav/OurTeamSwitchContentNav';
import { Switch, Route } from 'react-router-dom';

import OurTeamBannerBottom from '../../assets/img/OurTeamBannerBottom.png';
import OurTeamBanner from '../../assets/img/OurTeamBanner.png';
// import { TeamMemberItems } from 'components/TeamMember/TeamMemberItems';
const OurTeamPage = () => {
  const textBannerTop = 'Our Team';
  const styleBannerTop = {
    background: `url("${OurTeamBanner}")`,
    backgroundSize: 'cover',
    backgroundPosition: '0 20%',
  };

  const textBannerBottom = 'Services for priivate clients';
  const textBannerBottomButton = 'Learn more';
  const styleBannerBottom = {
    bottom: '900px',
  };

  const TeamMemberItems = ['Dimitar Jauch', 'Alessandro Del Pierro', 'Adam Małysz'];

  return (
    <Default className="OurTeamPage">
      <DefaultBannerTop text={textBannerTop} style={styleBannerTop} />
      <main>
        <OurTeamSwitchContentNav />
        <Switch>
          <Route path="/team" exact>
            <TeamMember name={TeamMemberItems[0]} />
          </Route>
          <Route path="/team/Zurich">
            <TeamMember name={TeamMemberItems[0]} />
          </Route>
          <Route path="/team/Nicosia">
            <TeamMember name={TeamMemberItems[1]} />
          </Route>
          <Route path="/team/Panama City">
            <TeamMember name={TeamMemberItems[2]} />
          </Route>
        </Switch>
        <BannerBottom
          img={OurTeamBannerBottom}
          imgDsc={'Woman with umbrella'}
          text={textBannerBottom}
          textButton={textBannerBottomButton}
          style={styleBannerBottom}
        />
      </main>
    </Default>
  );
};

export default OurTeamPage;
