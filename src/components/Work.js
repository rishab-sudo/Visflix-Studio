import React, { useRef, useState } from "react";
import "./Work.css";

// =========================================================
// IMPORT YOUR IMAGES HERE
// =========================================================

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work2.jpeg";
import work4 from "../assets/work1.jpeg";
import work5 from "../assets/work2.jpeg";
import work6 from "../assets/work1.jpeg";
import work7 from "../assets/work2.jpeg";
import work8 from "../assets/work1.jpeg";

// =========================================================
// WORK DATA
// =========================================================

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "MOVIES",
    image: work1,
  },
  {
    id: 2,
    title: "Project Two",
    category: "MOVIES",
    image: work2,
  },
  {
    id: 3,
    title: "Project Three",
    category: "TVCS",
    image: work3,
  },
  {
    id: 4,
    title: "Project Four",
    category: "TV SERIALS",
    image: work4,
  },
  {
    id: 5,
    title: "Project Five",
    category: "MOVIES",
    image: work5,
  },
  {
    id: 6,
    title: "Project Six",
    category: "MUSIC VIDEOS",
    image: work6,
  },
  {
    id: 7,
    title: "Project Seven",
    category: "TVCS",
    image: work7,
  },
  {
    id: 8,
    title: "Project Eight",
    category: "MOVIES",
    image: work8,
  },
];

// =========================================================
// CATEGORIES
// =========================================================

const categories = [
  "ALL",
  "MOVIES",
  "TVCS",
  "TV SERIALS",
  "MUSIC VIDEOS",
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Center card
  const [activeIndex, setActiveIndex] = useState(3);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // =========================================================
  // FILTER DATA
  // =========================================================

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // =========================================================
  // CHANGE SLIDE
  // =========================================================

  const goToSlide = (index) => {
    const total = filteredProjects.length;

    if (!total) return;

    if (index < 0) {
      setActiveIndex(total - 1);
    } else if (index >= total) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  // =========================================================
  // POINTER DOWN
  // =========================================================

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  // =========================================================
  // POINTER MOVE
  // =========================================================

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.clientX;
    const difference = currentX - startX.current;

    if (Math.abs(difference) > 60) {
      if (difference < 0) {
        goToSlide(activeIndex + 1);
      } else {
        goToSlide(activeIndex - 1);
      }

      isDragging.current = false;
    }
  };

  // =========================================================
  // POINTER UP
  // =========================================================

  const handlePointerUp = (e) => {
    isDragging.current = false;

    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (error) {
      // Ignore pointer capture errors
    }
  };

  // =========================================================
  // GET CARD POSITION
  // =========================================================

  const getCardClass = (index) => {
    const total = filteredProjects.length;

    if (total === 0) {
      return "work-card is-hidden";
    }

    let difference = index - activeIndex;

    // Circular positioning
    if (difference > Math.floor(total / 2)) {
      difference -= total;
    }

    if (difference < -Math.floor(total / 2)) {
      difference += total;
    }

    // =====================================================
    // CENTER
    // =====================================================

    if (difference === 0) {
      return "work-card is-center";
    }

    // =====================================================
    // FIRST LEFT
    // =====================================================

    if (difference === -1) {
      return "work-card is-left";
    }

    // =====================================================
    // FIRST RIGHT
    // =====================================================

    if (difference === 1) {
      return "work-card is-right";
    }

    // =====================================================
    // SECOND LEFT
    // =====================================================

    if (difference === -2) {
      return "work-card is-far-left";
    }

    // =====================================================
    // SECOND RIGHT
    // =====================================================

    if (difference === 2) {
      return "work-card is-far-right";
    }

    // =====================================================
    // THIRD LEFT
    // =====================================================

    if (difference === -3) {
      return "work-card is-far-left-2";
    }

    // =====================================================
    // THIRD RIGHT
    // =====================================================

    if (difference === 3) {
      return "work-card is-far-right-2";
    }

    // Everything else hidden
    return "work-card is-hidden";
  };

  // =========================================================
  // CATEGORY CHANGE
  // =========================================================

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    // Start from center
    // If there are enough cards, use index 3
    setActiveIndex(
      category === "ALL"
        ? 3
        : Math.min(3, Math.max(0, filteredProjects.length - 1))
    );
  };

  return (
    
    <section className="work-section" id="work">

      <div className="work-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="work-header">

          <div className="work-heading">

            <span className="work-heading-line"></span>

            <h2>WORK</h2>

          </div>

          {/* FILTERS */}

          <div className="work-filters">

            {categories.map((category, index) => (
              <React.Fragment key={category}>

                <button
                  type="button"
                  className={`work-filter ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                >
                  {category}
                </button>

                {index !== categories.length - 1 && (
                  <span className="work-filter-divider">
                    |
                  </span>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          className="work-slider"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >

          <div className="work-slider-stage">

            {filteredProjects.map((project, index) => (

              <div
                key={project.id}
                className={getCardClass(index)}
                onClick={() => setActiveIndex(index)}
              >

                <div className="work-card-inner">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-card-image"
                    draggable="false"
                  />

                  <div className="work-card-overlay"></div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* =================================================
            EXPLORE BUTTON
        ================================================= */}

        <div className="work-explore">

          <button type="button">
            EXPLORE MORE
          </button>

        </div>

      </div>

    </section>
  );
};

export default Work;