import React from "react";
import SectionOurPromise from "./SectionOurPromise";
import SectionOurServices from "./SectionOurServices";
import SectionOurOffices from "./SectionOurOffices";
import SectionOurTeam from "./SectionOurTeam";

import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <SectionOurPromise />
      <SectionOurServices />
      <SectionOurOffices />
      <SectionOurTeam />
    </div>
  );
};

export default Content;
