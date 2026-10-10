import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero3.jpg";
import hero3 from "../assets/hero2.jpg";
import hero4 from "../assets/hero4.jpg";

// Mobile images
import hero1Mobile from "../assets/Ai Demo Image Phone.jpg";
import hero2Mobile from "../assets/Color Demo Image Phone.jpg";
import hero3Mobile from "../assets/Filmmaking Demo Image Phone.jpg";
import hero4Mobile from "../assets/VFX Demo Image Phone.jpg";

import logo from "../assets/VisFlix-Logo.png";

const slides = [
  {
    image: hero1,
    mobileImage: hero1Mobile,
    demo: "FILMMAKING",
  },
  {
    image: hero2,
    mobileImage: hero2Mobile,
    demo: "VFX",
  },
  {
    image: hero3,
    mobileImage: hero3Mobile,
    demo: "DI & COLOR",
  },
  {
    image: hero4,
    mobileImage: hero4Mobile,
    demo: "AI",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="hero-section">

      {/* BACKGROUND CAROUSEL */}
      <Carousel
        activeIndex={activeSlide}
        onSelect={(selectedIndex) => {
          if (selectedIndex !== null) {
            setActiveSlide(selectedIndex);
          }
        }}
        interval={4000}
        pause={false}
        controls={false}
        indicators={false}
        fade
        className="hero-carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.demo}>
            <div
              className="hero-slide-bg"
              style={{
                "--desktop-image": `url("${slide.image}")`,
                "--mobile-image": `url("${slide.mobileImage}")`,
              }}
              role="img"
              aria-label={`${slide.demo} background`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* BLACK OVERLAY */}
      <div className="hero-overlay" />

      {/* HERO CONTENT */}
      <div className="hero-content-wrapper">

        {/* LOGO */}
        <div className="hero-logo">
          <img src={logo} alt="VisFlix" />
        </div>

        {/* DIVIDER */}
        <div className="hero-divider" />

        {/* HEADING + DESCRIPTION */}
        <div className="hero-text-content">
          <h1 className="hero-heading">
            Pre-Production <span>|</span> Production <span>|</span>{" "}
            Post-Production
          </h1>

          <p className="hero-description">
            From concept to final cut, we create powerful
            <br className="desktop-break" />
            visual stories that inspire, engage and
            <br className="desktop-break" />
            leave a lasting impact.
          </p>
        </div>

        {/* DEMO */}
        <div className="hero-demo">
          <div className="demo-line" />

          <div className="demo-content">
            <h2 >DEMO</h2>

            <div className="demo-links">
              {slides.map((slide, index) => (
                <React.Fragment key={slide.demo}>
                  {index > 0 && (
                    <span className="demo-separator">|</span>
                  )}

                  <button
                    type="button"
                    className={`demo-option ${
                      activeSlide === index ? "active" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-pressed={activeSlide === index}
                  >
                    {slide.demo}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;