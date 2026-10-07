import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero3.jpg";
import hero3 from "../assets/hero2.jpg";
import hero4 from "../assets/hero4.jpg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      demo: "FILMMAKING",
    },
    {
      image: hero2,
      demo: "VFX",
    },
    {
      image: hero3,
      demo: "DI & COLOR",
    },
    {
      image: hero4,
      demo: "AI",
    },
  ];

  const handleDemoClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero-section">

      {/* =========================================
          BACKGROUND CAROUSEL
      ========================================= */}
      <Carousel
        activeIndex={activeSlide}
        onSelect={(selectedIndex) => setActiveSlide(selectedIndex)}
        interval={4000}
        pause={false}
        controls={false}
        indicators={false}
        fade
        className="hero-carousel "
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide-bg"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* =========================================
          BLACK OVERLAY
      ========================================= */}
      <div className="hero-overlay"></div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div className="hero-content-wrapper container">

        {/* =========================================
            LOGO
        ========================================= */}
        <div className="hero-logo">
          <img
            src={require("../assets/VisFlix-Logo.png")}
            alt="Visflix"
          />
        </div>

        {/* =========================================
            HORIZONTAL DIVIDER
        ========================================= */}
        <div className="hero-divider"></div>

        {/* =========================================
            HEADING + DESCRIPTION
        ========================================= */}
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

        {/* =========================================
            DEMO
        ========================================= */}
        <div className="hero-demo">

          <div className="demo-line"></div>

          <div className="demo-content">

            <h2 className="section-heading">
              DEMO
            </h2>

            <div className="demo-links">

              {/* FILMMAKING */}
              <button
                type="button"
                className={`demo-option ${
                  activeSlide === 0 ? "active" : ""
                }`}
                onClick={() => handleDemoClick(0)}
              >
                FILMMAKING
              </button>

              <span className="demo-separator">|</span>

              {/* VFX */}
              <button
                type="button"
                className={`demo-option ${
                  activeSlide === 1 ? "active" : ""
                }`}
                onClick={() => handleDemoClick(1)}
              >
                VFX
              </button>

              <span className="demo-separator">|</span>

              {/* DI & COLOR */}
              <button
                type="button"
                className={`demo-option ${
                  activeSlide === 2 ? "active" : ""
                }`}
                onClick={() => handleDemoClick(2)}
              >
                DI & COLOR
              </button>

              <span className="demo-separator">|</span>

              {/* AI */}
              <button
                type="button"
                className={`demo-option ${
                  activeSlide === 3 ? "active" : ""
                }`}
                onClick={() => handleDemoClick(3)}
              >
                AI
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
