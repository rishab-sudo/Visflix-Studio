import React from "react";
import "./Hero.css";
import heroBg from "../assets/Ai Demo Image.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url("${heroBg}")`,
      }}
    >
      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* ==============================
          SINGLE HERO CONTENT WRAPPER
      =============================== */}
      <div className="hero-content-wrapper">

        {/* Logo */}
        <div className="hero-logo">
          <img
            src="/logo.png"
            alt="Visflix Studio"
          />
        </div>

        {/* Horizontal Divider */}
        <div className="hero-divider"></div>

        {/* Heading + Description */}
        <div className="hero-text-content">

          <h1 className="hero-heading">
            Pre-Production&nbsp; | &nbsp;Production&nbsp; | &nbsp;Post-Production
          </h1>

          <p className="hero-description">
            From concept to final cut, we create powerful
            <br className="desktop-break" />
            visual stories that inspire, engage and
            <br className="desktop-break" />
            leave a lasting impact.
          </p>

        </div>

        {/* Demo */}
        <div className="hero-demo">

          <div className="demo-line"></div>

          <div className="demo-content">

            <h2>DEMO</h2>

            <div className="demo-links">

              <span>FILMMAKING</span>

              <span className="demo-separator">|</span>

              <span>VFX</span>

              <span className="demo-separator">|</span>

              <span>DI</span>

              <span className="demo-separator">|</span>

              <span>COLOR</span>

              <span className="demo-separator">|</span>

              <span>AI</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;