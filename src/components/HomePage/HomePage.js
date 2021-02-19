import React from "react";

import BannerHero from  "../Header/BannerHero"
import Content from "../Content/Content";
import Footer from "../Footer/Footer";



const HomePage = () => {
  return (
    <div className="homePage">
      <header>
        <BannerHero />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
