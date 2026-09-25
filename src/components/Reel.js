import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

import "./Reel.css";

const reels = [
  {
    id: 1,
    title: "FILMMAKING",
    video: "/videos/reel1.mp4",
    poster: require("../assets/reel1.png"),
  },
  {
    id: 2,
    title: "VFX",
    video: "/videos/reel2.mp4",
    poster: require("../assets/reel2.png"),
  },
  {
    id: 3,
    title: "DI | COLOR",
    video: "/videos/reel3.mp4",
    poster: require("../assets/reel3.png"),
  },
  {
    id: 4,
    title: "AI",
    video: "/videos/reel4.mp4",
     poster: require("../assets/reel4.png"),
  },
 
];

const Reel = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleVideoClick = async (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    // Pause all other videos
    videoRefs.current.forEach((item, i) => {
      if (item && i !== index) {
        item.pause();
        item.currentTime = 0;
      }
    });

    if (video.paused) {
      try {
        await video.play();
        setPlayingIndex(index);
      } catch (error) {
        console.log("Video play error:", error);
      }
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  const handleVideoEnd = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  return (
    
    <section className="reel-section" id="reel">
      <div className="reel-container">

        {/* Section Heading */}
        <div className="reel-heading">
          <span className="reel-heading-line"></span>

          <h2>SHOWREEL</h2>
        </div>

        {/* Reel Grid */}
        <div className="reel-grid">
          {reels.map((reel, index) => (
            <div
              className={`reel-card ${
                playingIndex === index ? "is-playing" : ""
              }`}
              key={reel.id}
              onClick={() => handleVideoClick(index)}
            >

              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="reel-video"
                src={reel.video}
                poster={reel.poster}
                muted
                playsInline
                preload="metadata"
                onEnded={() => handleVideoEnd(index)}
              />

              {/* Dark Overlay */}
              <div className="reel-overlay"></div>

              {/* Play / Pause Button */}
              <button
                type="button"
                className="reel-play-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoClick(index);
                }}
                aria-label={
                  playingIndex === index
                    ? `Pause ${reel.title}`
                    : `Play ${reel.title}`
                }
              >
                {playingIndex === index ? (
                  <Pause
                    size={25}
                    strokeWidth={2.2}
                  />
                ) : (
                  <Play
                    size={25}
                    strokeWidth={2.2}
                    fill="white"
                  />
                )}
              </button>

              {/* Title */}
              <div className="reel-title">
                {reel.title}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reel;