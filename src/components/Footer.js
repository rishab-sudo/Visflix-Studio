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

// Replace these with your actual image paths
const galleryImages = [
  require("../assets/gallery1.jpg"),
  require("../assets/gallery2.jpg"),
    require("../assets/gallery3.jpg"),
      require("../assets/gallery4.jpg"),
        require("../assets/gallery5.jpg"),
          require("../assets/gallery6.jpg"),
          
];

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">

          {/* ================= LEFT COLUMN ================= */}
          <div className="footer-column footer-social-column">
            
            <div className="footer-logo">
              <img
                src="/images/logo.png"
                alt="Visflix Studio"
              />
            </div>

            <h3 className="footer-title">
              Follow Me
            </h3>

            <p className="footer-subtitle">
              Connect me with social media
            </p>

            <div className="footer-socials">
              <a  aria-label="Instagram">
                <FaInstagram />
              </a>

              <a  aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a  aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a  aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* ================= CENTER COLUMN ================= */}
          <div className="footer-column footer-gallery-column">

            <h3 className="footer-title footer-gallery-title">
              Our Gallery
            </h3>

            <div className="footer-gallery">
              {galleryImages.map((image, index) => (
                <div
                  className="footer-gallery-item"
                  key={index}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                  />

                  <div className="gallery-hover">
                    <span>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="footer-column footer-contact-column">

            <h3 className="footer-title">
              Contact Us
            </h3>

            <div className="footer-contact-list">

              <div className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>
                  Mumbai | Delhi | Bareilly
                </span>
              </div>

              <div className="footer-contact-item">
                <FaWhatsapp />
                <span>
                  +91 75 0586 7318
                </span>
              </div>

              <div className="footer-contact-item">
                <FaEnvelope />
                <span>
                  studiovisflix@gmail.com
                </span>
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
            <img
              src={selectedImage}
              alt="Gallery Preview"
            />
          </div>
      </div>
      )}
    </>
  );
};

export default Footer;