import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { Component } from 'react';

import { HomePage } from '../pages/HomePage/HomePage';
import { ServicesPage } from '../pages/ServicesPage/ServicesPage';
import { OurTeamPage } from '../pages/OurTeamPage/OurTeamPage';
import { ContactUsPage } from 'src/pages/ContactUs/ContactUsPage';
import { AboutUsPage } from 'src/pages/AboutUsPage/AboutUsPage';
import { LocationsPage } from 'src/pages/LocationsPage/LocationsPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/team" component={OurTeamPage} />
            <Route path="/contactUs" component={ContactUsPage} />
            <Route path="/aboutUs" component={AboutUsPage} />
            <Route path="/locations" component={LocationsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
