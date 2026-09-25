import React from "react";

import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Experties from "../components/Experties";
import Work from "../components/Work";
import Reel from "../components/Reel";
import Team from "../components/Team";


import SectionReveal from "../components/SectionReveal";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero */}
      <Hero />

      {/* About */}
      <SectionReveal>
        <HomeAbout />
      </SectionReveal>

      {/* Expertise */}
      <SectionReveal>
        <Experties/>
      </SectionReveal>

      {/* Work */}
      <SectionReveal>
        <Work />
      </SectionReveal>

      {/* Reel */}
      <SectionReveal>
        <Reel />
      </SectionReveal>

      {/* Team */}
      <SectionReveal>
        <Team />
      </SectionReveal>

      {/* Movies */}


    </div>
  );
};

export default Home;