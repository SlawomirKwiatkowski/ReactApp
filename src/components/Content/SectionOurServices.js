import React from "react";

import { BaseButton } from "../BaseButton";

import "./content.css";

const SectionOurServices = () => {
  return (
    <div className="sectionOurServices">
      <h1 style={{ float: "left" }}>
        <hr />
        Our services
      </h1>
      <div className="sectionOurServicesRight">
        <h2>
          <h3 style={{ float: "left" }}>For private client</h3>
          <BaseButton style={{ float: "left" }} theme="empty" size="small2">
            <span>&#8594;</span>
          </BaseButton>
        </h2>

        <h2>
          <h3 style={{ float: "left" }}>For private client</h3>
          <BaseButton
            style={{ float: "left" }}
            theme="arrowbutton"
            size="small2"
          >
            <span>&#8594;</span>
          </BaseButton>
        </h2>
      </div>
    </div>
  );
};

export default SectionOurServices;
