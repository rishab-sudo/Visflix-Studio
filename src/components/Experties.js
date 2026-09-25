import React from "react";

import {
  FaFileAlt,
  FaVideo,
  FaDesktop,
} from "react-icons/fa";

import "./Experties.css";

// Import your background images
import preProductionBg from "../assets/experty1.png";
import productionBg from "../assets/experty2.png";
import postProductionBg from "../assets/experty3.png";

const expertiseData = [
  {
    id: 1,
    title: "PRE-PRODUCTION",
    icon: <FaFileAlt />,
    background: preProductionBg,
    points: [
      "Concept Development",
      "Script Writing",
      "Storyboarding",
      "Casting",
      "Location Scouting",
      "Production Planning",
      "Shot Breakdown",
    ],
  },
  {
    id: 2,
    title: "PRODUCTION",
    icon: <FaVideo />,
    background: productionBg,
    points: [
      "Direction",
      "Cinematography",
      "Ad Films / TVCs",
      "Music Videos",
      "Corporate Films",
      "Product Shoots",
      "Production Sound & Lighting",
    ],
  },
  {
    id: 3,
    title: "POST-PRODUCTION",
    icon: <FaDesktop />,
    background: postProductionBg,
    points: [
      "VFX & Compositing",
      "Color Grading",
      "Video Editing",
      "Motion Graphics",
      "3D / CGI",
      "Sound Design & Mixing",
      "AI Video Production",
    ],
  },
];

const Experties = () => {
  return (
    
    <section className="experties-section"  id="expertise">
      <div className="experties-container">

        {/* Section Heading */}
        <div className="experties-heading">
          <div className="experties-heading-line"></div>

          <div>
            <h2>OUR EXPERTISE</h2>
            <p>End-to-end production solutions under one roof</p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="experties-grid">
          {expertiseData.map((item) => (
            <div
              className="experties-card"
              key={item.id}
              style={{
                backgroundImage: `url(${item.background})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="experties-card-overlay"></div>

              {/* Card Content */}
              <div className="experties-card-content">

                {/* Icon */}
                <div className="experties-icon">
                  {item.icon}
                </div>

                {/* Title */}
                <h3>{item.title}</h3>

                {/* Points */}
                <ul>
                  {item.points.map((point, index) => (
                    <li key={index}>
                      <span className="experties-bullet"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experties;