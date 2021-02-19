import React from "react";
import { BaseButton } from "../BaseButton";
import ourTeam from '../img/OurTeam.png'

const SectionOurTeam = () => {
  return (
    <section className="sectionOurTeam">
      <div className="text">
        <h1>Met our dedicated Team.</h1>

        <h2>
          Lorem ipsum dolor sit amet, consectuer adpiscing elit, sed dam nonummy
          nibh euismod tincidunt.
        </h2>
        <BaseButton theme="primary" size="medium">
          Our team
        </BaseButton>
      </div>

      <img src={ourTeam} alt="Our Team image" />
    </section>
  );
};

export default SectionOurTeam;
