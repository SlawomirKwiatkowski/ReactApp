import React from "react";
import Navbar from "../Header/Navbar";

import "./Header.scss";
const Header = () => {
  return (

      <div className="header">
        <div className="bannerServicesTop">
          <Navbar />
          <h4>
               Services For<br/> institutional Clients
          </h4>
        </div>
      </div>

  );
};

export default Header;
