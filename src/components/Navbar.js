import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="Visflix Studio" />
          </Link>

          <div className="desktop-nav">

            <Link to="/" className="nav-link">
              HOME
            </Link>

            <span className="nav-divider"></span>

            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>

            <span className="nav-divider"></span>

            <Link to="/expertise" className="nav-link">
              OUR EXPERTISE
            </Link>

            <span className="nav-divider"></span>

            <Link to="/showreel" className="nav-link">
              SHOWREEL
            </Link>

            <span className="nav-divider"></span>

            <Link to="/showcase" className="nav-link">
              SHOWCASE
            </Link>

            <span className="nav-divider"></span>

            <Link to="/team" className="nav-link">
              TEAM
            </Link>

            <span className="nav-divider"></span>

            <Link to="/contact" className="contact-btn">
              CONTACT
            </Link>

          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="mobile-menu-header">

          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Visflix Studio" />
          </Link>

          <button className="close-menu" onClick={closeMenu}>
            ×
          </button>

        </div>

        <div className="mobile-nav-links">

          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>

          <Link to="/about" onClick={closeMenu}>
            ABOUT US
          </Link>

          <Link to="/expertise" onClick={closeMenu}>
            OUR EXPERTISE
          </Link>

          <Link to="/showreel" onClick={closeMenu}>
            SHOWREEL
          </Link>

          <Link to="/showcase" onClick={closeMenu}>
            SHOWCASE
          </Link>

          <Link to="/team" onClick={closeMenu}>
            TEAM
          </Link>

          <Link
            to="/contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            CONTACT
          </Link>

        </div>

      </aside>
    </>
  );
};

export default Navbar;