import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Header/Navbar";

import "./Header.scss";
const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="bannerServicesTop">
          <Navbar />
          <h4>
               Services For<br/> institutional Clients
          </h4>
        </div>
      </div>
    </Router>
  );
};

export default Header;
