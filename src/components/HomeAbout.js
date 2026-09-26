import React from "react";
import {
  FaBriefcase,
  FaVideo,
  FaImages,
} from "react-icons/fa";
import backgroundImage from "../assets/about-bg.png";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section 
     id="about"
      className="  aboutus-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
  

      <div className="aboutus-container ">

        {/* Heading */}
        <div className="aboutus-heading">
          <span className="aboutus-heading-line"></span>
          <h2>ABOUT US</h2>
        </div>

        {/* Content */}
        <div className="aboutus-content">

          <p className="page-text">
            VisFlix Studio is a creative Pre-Production, Production and
            Post-Production house delivering world-class visual experiences
            for feature films, television commercials (TVCs), TV Serials,
            music videos, digital campaigns and premium cinematic productions.
            With over 10 years of industry experience, we bring together
            creativity, technology, and precision across Pre-Production,
            Production, and Post-Production to craft visuals that meet the
            highest industry standards.
          </p>

          <p className="page-text">
            From concept to final delivery, we provide end-to-end creative
            solutions across Concept Development, Scriptwriting, Storyboarding,
            Casting, Location Scouting, Direction, Cinematography, Filming,
            Visual Effects (VFX), Color Grading, Digital Intermediate (DI),
            AI-Powered Content Creation, Professional Video Editing, Motion
            Graphics, and Sound Edit/Design. Every project is executed with
            meticulous attention to detail, ensuring exceptional quality and a
            seamless production workflow.
          </p>

          <p className="page-text">
            At VisFlix Studio, our vision is to push creative boundaries,
            embrace emerging technologies, and transform ideas into powerful
            visual stories that inspire, engage, and captivate audiences.
          </p>

        </div>

        {/* Stats */}
        <div className="aboutus-stats">

          {/* EXPERIENCE */}
          <div className="aboutus-stat">

            <div className="aboutus-icon">
              <FaBriefcase />
            </div>

            <div className="aboutus-number">
              10<span>+</span>
            </div>

            <div className="aboutus-label">
              YEARS OF EXPERIENCE
            </div>

          </div>

          {/* PROJECTS */}
          <div className="aboutus-stat">

            <div className="aboutus-icon">
              <FaVideo />
            </div>

            <div className="aboutus-number">
              100<span>+</span>
            </div>

            <div className="aboutus-label">
              PROJECTS
            </div>

          </div>

          {/* SHOTS */}
          <div className="aboutus-stat">

            <div className="aboutus-icon">
              <FaImages />
            </div>

            <div className="aboutus-number">
              500<span>+</span>
            </div>

            <div className="aboutus-label">
              SHOTS
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;