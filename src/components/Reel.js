import React from "react";
import { Play } from "lucide-react";
import Heading from "../components/Heading";
import "./Reel.css";

const reels = [
  {
    id: 1,
    title: "FILMMAKING",
    url: "https://youtu.be/T4JMJuQ7GCE",
    poster: require("../assets/reel1.png"),
  },
  {
    id: 2,
    title: "VFX",
    url: "https://youtu.be/LoNrxRUGQ6U",
    poster: require("../assets/reel2.png"),
  },
  {
    id: 3,
    title: "DI | COLOR",
    url: "https://youtu.be/TN7i-cTTNfY",
    poster: require("../assets/reel3.png"),
  },
  {
    id: 4,
    title: "AI",
    url: "https://www.youtube.com/shorts/6tgFKKpKedw",
    poster: require("../assets/reel4.png"),
  },
];

const Reel = () => {
  return (
    <section className="reel-section" id="reel">
      <div className="reel-container container">

        {/* Section Heading */}
        <Heading heading="SHOWREEL" />

        {/* Reel Grid */}
        <div className="reel-grid">
          {reels.map((reel) => (
            <a
              className="reel-card"
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${reel.title} showreel on YouTube`}
            >
              {/* Poster */}
              <img
                className="reel-video"
                src={reel.poster}
                alt={`${reel.title} showreel`}
                loading="lazy"
                draggable="false"
              />

              {/* Dark Overlay */}
              <div className="reel-overlay"></div>

              {/* Play Icon */}
              <span className="reel-play-button" aria-hidden="true">
                <Play size={25} strokeWidth={2.2} fill="white" />
              </span>

              {/* Title */}
              <div className="reel-title">{reel.title}</div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reel;