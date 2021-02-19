import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import "./App.css";
import React, { Component } from "react";
// import BannerHero from "./BannerHero";
// import Content from "./Content/Content";
// import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage"
import ServicesPage from "./ServicesPage/ServicesPage"
// import BannerBottom from './Content/BannerBottom';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/services" component={ServicesPage}/>
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
