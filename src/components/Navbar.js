import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const handleScroll = (id) => {
    setActiveSection(id);
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
            <img
              src={require("../assets/VisFlix-Logo.png")}
              alt="visflix"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="desktop-nav">

            <button
              type="button"
              className={`nav-link ${
                activeSection === "home" ? "active" : ""
              }`}
              onClick={() => handleScroll("home")}
            >
              HOME
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => handleScroll("about")}
            >
              ABOUT US
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`nav-link ${
                activeSection === "expertise" ? "active" : ""
              }`}
              onClick={() => handleScroll("expertise")}
            >
              OUR EXPERTISE
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`nav-link ${
                activeSection === "work" ? "active" : ""
              }`}
              onClick={() => handleScroll("work")}
            >
              SHOWCASE
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`nav-link ${
                activeSection === "reel" ? "active" : ""
              }`}
              onClick={() => handleScroll("reel")}
            >
              SHOWREEL
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`nav-link ${
                activeSection === "team" ? "active" : ""
              }`}
              onClick={() => handleScroll("team")}
            >
              TEAM
            </button>

            <span className="nav-divider"></span>

            <button
              type="button"
              className={`contact-btn ${
                activeSection === "contact" ? "active" : ""
              }`}
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
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleScroll("home")}
          >
            HOME
          </button>

          <button
            type="button"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleScroll("about")}
          >
            ABOUT US
          </button>

          <button
            type="button"
            className={activeSection === "expertise" ? "active" : ""}
            onClick={() => handleScroll("expertise")}
          >
            OUR EXPERTISE
          </button>

          <button
            type="button"
            className={activeSection === "reel" ? "active" : ""}
            onClick={() => handleScroll("reel")}
          >
            SHOWREEL
          </button>

          <button
            type="button"
            className={activeSection === "work" ? "active" : ""}
            onClick={() => handleScroll("work")}
          >
            SHOWCASE
          </button>

          <button
            type="button"
            className={activeSection === "team" ? "active" : ""}
            onClick={() => handleScroll("team")}
          >
            TEAM
          </button>

          <button
            type="button"
            className={`mobile-contact ${
              activeSection === "contact" ? "active" : ""
            }`}
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
