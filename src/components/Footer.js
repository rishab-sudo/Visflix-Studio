import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

import "./Footer.css";

// Gallery Images
const galleryImages = [
  require("../assets/gallery1.jpg"),
  require("../assets/gallery2.jpg"),
  require("../assets/gallery3.jpg"),
  require("../assets/gallery4.jpg"),
  require("../assets/gallery5.jpg"),
  require("../assets/gallery6.jpg"),
];

const footerLogo = require("../assets/footer-logo.png");

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Smooth scroll to the top of the page (footer logo click)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close popup with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <footer className="footer-section" id="contact">
        <div className="footer-container container">
          {/* ================= LEFT COLUMN ================= */}
          <div className="footer-column footer-social-column">
            <div className="footer-header-slot">
              <div className="footer-logo">
                <button
                  type="button"
                  className="footer-logo-btn"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  title="Back to top"
                >
                  <img src={footerLogo} alt="VisFlix Studio" draggable={false} />
                </button>
              </div>
            </div>

            <div className="footer-body-slot">
              <h3 className="footer-title">Follow Me</h3>

              <p className="footer-subtitle">Connect me with social media</p>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/visflixstudio?xtok=MTJrZGt2bXg1YnU0MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/VisflixStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/visflix-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://youtube.com/@visflixstudio?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div className="footer-column footer-gallery-column">
            <div className="footer-header-slot">
              <h3 className="footer-title">Our Gallery</h3>
            </div>

            <div className="footer-body-slot">
              <div className="footer-gallery">
                {galleryImages.map((image, index) => (
                  <div
                    className="footer-gallery-item"
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedImage(image);
                      }
                    }}
                    aria-label={`Open Gallery ${index + 1}`}
                  >
                    <img src={image} alt={`Gallery ${index + 1}`} />

                    <div className="gallery-hover">
                      <span>+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="footer-column footer-contact-column">
            <div className="footer-header-slot">
              <h3 className="footer-title">Contact Us</h3>
            </div>

            <div className="footer-body-slot">
              <div className="footer-contact-list">
                {/* Location */}
                <div className="footer-contact-item">
                  <FaMapMarkerAlt />
                  <span>Mumbai | Delhi | Bareilly</span>
                </div>

                {/* WhatsApp */}
                <div className="footer-contact-item">
                  <FaWhatsapp />
                  <a
                    href="https://wa.me/917505867318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    +91 75 0586 7318
                  </a>
                </div>

                {/* Email */}
                <div className="footer-contact-item">
                  <FaEnvelope />
                  <a
                    href="mailto:studiovisflix@gmail.com"
                    className="footer-contact-link"
                  >
                    studiovisflix@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= IMAGE POPUP ================= */}
      {selectedImage && (
        <div
          className="footer-image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="footer-popup-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <div
            className="footer-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Gallery Preview" />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;