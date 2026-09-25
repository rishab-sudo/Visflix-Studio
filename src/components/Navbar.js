import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => handleScroll("home")}
          >
            <img src="/logo.png" alt="Visflix Studio" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="desktop-nav">

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("home")}
            >
              HOME
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("about")}
            >
              ABOUT US
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("expertise")}
            >
              OUR EXPERTISE
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("showreel")}
            >
              SHOWREEL
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("showcase")}
            >
              SHOWCASE
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleScroll("team")}
            >
              TEAM
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className="contact-btn"
              onClick={() => handleScroll("contact")}
            >
              CONTACT
            </button>

          </div>

          {/* ================= HAMBURGER ================= */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* ================= MOBILE MENU ================= */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        {/* MOBILE HEADER */}
        <div className="mobile-menu-header">

          <Link
            to="/"
            onClick={() => handleScroll("home")}
          >
            <img src="/logo.png" alt="Visflix Studio" />
          </Link>

          <button
            type="button"
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            ×
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        <div className="mobile-nav-links">

          <button
            type="button"
            onClick={() => handleScroll("home")}
          >
            HOME
          </button>

          <button
            type="button"
            onClick={() => handleScroll("about")}
          >
            ABOUT US
          </button>

          <button
            type="button"
            onClick={() => handleScroll("expertise")}
          >
            OUR EXPERTISE
          </button>

          <button
            type="button"
            onClick={() => handleScroll("reel")}
          >
            SHOWREEL
          </button>

          <button
            type="button"
            onClick={() => handleScroll("showcase")}
          >
            SHOWCASE
          </button>

          <button
            type="button"
            onClick={() => handleScroll("team")}
          >
            TEAM
          </button>

          <button
            type="button"
            className="mobile-contact"
            onClick={() => handleScroll("contact")}
          >
            CONTACT
          </button>

        </div>

      </aside>
    </>
  );
};

export default Navbar;