import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import React, { Component } from 'react';
// import BannerHero from "./BannerHero";
// import Content from "./Content/Content";
// import Footer from "./Footer/Footer";
import HomePage from '../pages/HomePage/HomePage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import OurTeamPage from '../pages/OurTeamPage/OurTeamPage';
// import BannerBottom from './Content/BannerBottom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/team" component={OurTeamPage} />
          </Switch>
          {/* <header>
            <BannerHero />
          </header>
          <main>
            <Content />
          </main>
          <footer>
            <Footer />
          </footer>
         */}
        </Router>
      </div>
    );
  }
}
export default App;
