import React, { useRef, useState, useEffect } from "react";
import "./Work.css";

import work1 from "../assets/Movies/1000KM - VFX.jpg";
import work2 from "../assets/Movies/Dwidha - VFX, DI Color Grade.jpg";
import work3 from "../assets/Movies/Fakt Purusho Mate - Color Grade.jpg";
import work4 from "../assets/Movies/Fari Ek Vaar - Color Grade.jpg";
import work5 from "../assets/Movies/HAHACAR - Color Grade.jpg";
import work6 from "../assets/Movies/Itta Kitta - Color Grade.jpg";
import work7 from "../assets/Movies/Kasoombo - Color Grade.jpg";
import work8 from "../assets/Movies/PSI Arjun - Color Grade.jpg";
import work9 from "../assets/Movies/Trisha On The Rocks - Color Grade.jpg";
import work10 from "../assets/Movies/Udan Chhu - Color Grade.jpg";
import work11 from "../assets/Movies/Welll Done CA Sahab - Color Grade.jpg";

import work12 from "../assets/TVCs/JSW Paints - VFX, Direction.jpg";
import work13 from "../assets/TVCs/Out Karo - Direction.jpg";
import work14 from "../assets/TVCs/Traya - Direction.jpg";

import work15 from "../assets/Series/Hustlers - DI Color Grade.jpg";

import work16 from "../assets/Music Videos/Ek Mulaqaat - Color Grade.jpg";
import work17 from "../assets/Music Videos/Hadh Se - Color Grade.jpg";
import work18 from "../assets/Music Videos/Jhachdi - Color Grade.jpg";

import Heading from "../components/Heading";

// =========================================================
// WORK DATA
// =========================================================

const projects = [
  {
    id: 1,
    title: "1000KM",
    category: "MOVIES",
    image: work1,
  },
  {
    id: 2,
    title: "Dwidha",
    category: "MOVIES",
    image: work2,
  },
  {
    id: 3,
    title: "Fakt Purusho Mate",
    category: "MOVIES",
    image: work3,
  },
  {
    id: 4,
    title: "Fari Ek Vaar",
    category: "MOVIES",
    image: work4,
  },
  {
    id: 5,
    title: "HAHACAR",
    category: "MOVIES",
    image: work5,
  },
  {
    id: 6,
    title: "Itta Kitta",
    category: "MOVIES",
    image: work6,
  },
  {
    id: 7,
    title: "Kasoombo",
    category: "MOVIES",
    image: work7,
  },
  {
    id: 8,
    title: "PSI Arjun",
    category: "MOVIES",
    image: work8,
  },
  {
    id: 9,
    title: "Trisha On The Rocks",
    category: "MOVIES",
    image: work9,
  },
  {
    id: 10,
    title: "Udan Chhu",
    category: "MOVIES",
    image: work10,
  },
  {
    id: 11,
    title: "Well Done CA Sahab",
    category: "MOVIES",
    image: work11,
  },
  {
    id: 12,
    title: "JSW Paints",
    category: "TVCS",
    image: work12,
  },
  {
    id: 13,
    title: "Out Karo",
    category: "TVCS",
    image: work13,
  },
  {
    id: 14,
    title: "Traya",
    category: "TVCS",
    image: work14,
  },
  {
    id: 15,
    title: "Hustlers",
    category: "SERIES",
    image: work15,
  },
  {
    id: 16,
    title: "Ek Mulaqaat",
    category: "MUSIC VIDEOS",
    image: work16,
  },
  {
    id: 17,
    title: "Hadh Se",
    category: "MUSIC VIDEOS",
    image: work17,
  },
  {
    id: 18,
    title: "Jhachdi",
    category: "MUSIC VIDEOS",
    image: work18,
  },
];

// =========================================================
// ALL CATEGORY PRIORITY
// Jhachdi stays in the center when ALL is selected.
// =========================================================

const allCategoryPriority = [
  18, // Center: Jhachdi
  2,  // Right: Dwidha
  17, // Far right: Hadh Se
  5,  // Outer right: HAHACAR
  6,  // Outer left: Itta Kitta
  12, // Far left: JSW Paints
  15, // Left: Hustlers
];

const categories = [
  "ALL",
  "MOVIES",
  "TVCS",
  "SERIES",
  "MUSIC VIDEOS",
];

// =========================================================
// WORK COMPONENT
// =========================================================

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(7);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // Responsive card count:
  // Desktop: 7 cards
  // Tablet: 5 cards
  // Mobile: 3 cards

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(3);
      } else if (window.innerWidth <= 1200) {
        setVisibleCards(5);
      } else {
        setVisibleCards(7);
      }
    };

    updateCardCount();

    window.addEventListener("resize", updateCardCount);

    return () => {
      window.removeEventListener("resize", updateCardCount);
    };
  }, []);

  // Sort projects for the ALL category.
  // Other categories retain their original order.

  const categoryProjects =
    activeCategory === "ALL"
      ? [
          ...allCategoryPriority
            .map((id) =>
              projects.find((project) => project.id === id)
            )
            .filter(Boolean),

          ...projects.filter(
            (project) =>
              !allCategoryPriority.includes(project.id)
          ),
        ]
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // Generate the required number of cards.
  // Repeat projects if a category contains fewer cards.

  const getOddProjects = () => {
    if (categoryProjects.length === 0) {
      return [];
    }

    let targetCount;

    if (categoryProjects.length >= visibleCards) {
      targetCount = visibleCards;
    } else if (categoryProjects.length <= 3) {
      targetCount = 3;
    } else if (categoryProjects.length <= 5) {
      targetCount = 5;
    } else {
      targetCount = 7;
    }

    const result = [];

    for (let i = 0; i < targetCount; i += 1) {
      const original =
        categoryProjects[i % categoryProjects.length];

      result.push({
        ...original,
        slideId: `${original.id}-${i}`,
      });
    }

    return result;
  };

  const filteredProjects = getOddProjects();

  // Reset slider position when category or screen size changes.

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory, visibleCards]);

  // Navigate between slides.

  const goToSlide = (index) => {
    const total = filteredProjects.length;

    if (!total) {
      return;
    }

    if (index < 0) {
      setActiveIndex(total - 1);
    } else if (index >= total) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  // Pointer and swipe handling.

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) {
      return;
    }

    const difference = e.clientX - startX.current;

    if (Math.abs(difference) > 60) {
      goToSlide(
        difference < 0
          ? activeIndex + 1
          : activeIndex - 1
      );

      isDragging.current = false;
    }
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;

    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (error) {
      // Ignore pointer capture release errors.
    }
  };

  // Calculate each card's position relative to the active card.

  const getDifference = (index) => {
    const total = filteredProjects.length;

    if (!total) {
      return 999;
    }

    let difference = index - activeIndex;

    if (difference > Math.floor(total / 2)) {
      difference -= total;
    }

    if (difference < -Math.floor(total / 2)) {
      difference += total;
    }

    return difference;
  };

  // Assign CSS classes to the cards.

  const getCardClass = (index) => {
    const difference = getDifference(index);

    if (difference === 0) {
      return "work-card is-center";
    }

    if (difference === -1) {
      return "work-card is-left";
    }

    if (difference === 1) {
      return "work-card is-right";
    }

    if (difference === -2) {
      return "work-card is-far-left";
    }

    if (difference === 2) {
      return "work-card is-far-right";
    }

    if (difference === -3) {
      return "work-card is-far-left-2";
    }

    if (difference === 3) {
      return "work-card is-far-right-2";
    }

    return "work-card is-hidden";
  };

  // Handle category filter clicks.

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container">

        {/* Header and category filters */}

        <div className="work-header">
          <Heading heading="Work" />

          <div className="work-filters">
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                <button
                  type="button"
                  className={`work-filter ${
                    activeCategory === category ? "active" : ""
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

        {/* Work slider */}

        <div
          className={`work-slider visible-${visibleCards}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="work-slider-stage">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slideId}
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

                  <div className="work-card-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore more button */}

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
