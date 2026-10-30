import React, { useState } from "react";
import Heading from "./Heading";
import "./HomeAbout.css";

const HomeAbout = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section id="about" className="aboutus-section">
      <div className="aboutus-container container">

        {/* Heading */}
        <Heading heading="ABOUT US" />

        {/* Content */}
        <div className="aboutus-content">

          {/* First Paragraph */}
          <p className="page-text">
            VisFlix Studio is a creative Pre-Production, Production and
            Post-Production house delivering world-class visual experiences
            for feature films, television commercials (TVCs), series,
            music videos, digital campaigns and premium cinematic productions.
            With over 10 years of industry experience, we bring together
            creativity, technology, and precision across Pre-Production,
            Production, and Post-Production to craft visuals that meet the
            highest industry standards.
          </p>

          {/* Extra Content: always visible on desktop, toggled on mobile */}
          <div className={`aboutus-extra-content ${readMore ? "active" : ""}`}>
            <p className="page-text">
              From concept to final delivery, we provide end-to-end creative
              solutions across Concept Development, Scriptwriting, Storyboarding,
              Casting, Location Scouting, Direction, Cinematography, Filming,
              Visual Effects (VFX), Color Grading, Digital Intermediate (DI),
              AI-Powered Content Creation, Professional Video Editing,
              Motion Graphics, and Sound Edit/Design. Every project is executed
              with meticulous attention to detail, ensuring exceptional quality
              and a seamless production workflow.
            </p>

            <p className="page-text">
              At VisFlix Studio, our vision is to push creative boundaries,
              embrace emerging technologies, and transform ideas into powerful
              visual stories that inspire, engage, and captivate audiences.
            </p>
          </div>

          {/* Read More Button (mobile only, controlled via CSS) */}
          <button
            type="button"
            className="aboutus-readmore"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Stats */}
        <div className="aboutus-stats">

          {/* Experience */}
          <div className="aboutus-stat">
            <div className="aboutus-icon">
              <img
                src={require("../assets/icons/about-Experience-Icon.png")}
                alt="Experience"
              />
            </div>
            <div className="aboutus-number">
              10<span>+</span>
            </div>
            <div className="aboutus-label">YEARS OF EXPERIENCE</div>
          </div>

          {/* Projects */}
          <div className="aboutus-stat">
            <div className="aboutus-icon">
              <img
                src={require("../assets/icons/about- project-icon.png")}
                alt="Projects"
              />
            </div>
            <div className="aboutus-number">
              100<span>+</span>
            </div>
            <div className="aboutus-label">PROJECTS</div>
          </div>

          {/* Shots */}
          <div className="aboutus-stat">
            <div className="aboutus-icon">
              <img
                src={require("../assets/icons/about-shots-icon.png")}
                alt="Shots"
              />
            </div>
            <div className="aboutus-number">
              500<span>+</span>
            </div>
            <div className="aboutus-label">SHOTS</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;