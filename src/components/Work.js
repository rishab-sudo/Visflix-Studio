import React, { useRef, useState, useEffect } from "react";
import "./Work.css";

// =========================================================
// IMPORT IMAGES
// =========================================================

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work2.jpeg";
import work4 from "../assets/work1.jpeg";
import work5 from "../assets/work2.jpeg";
import work6 from "../assets/work1.jpeg";
import work7 from "../assets/work2.jpeg";
import work8 from "../assets/work1.jpeg";
import  Heading  from "../components/Heading";

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
    category: "SERIES",
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
  "SERIES",
  "MUSIC VIDEOS",
];

const Work = () => {
  const [activeCategory, setActiveCategory] =
    useState("ALL");

  const [activeIndex, setActiveIndex] =
    useState(0);

  // =======================================================
  // DESKTOP = 7
  // TABLET = 5
  // MOBILE = 3
  // =======================================================

  const [visibleCards, setVisibleCards] =
    useState(7);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // =========================================================
  // RESPONSIVE CARD COUNT
  // =========================================================

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

    window.addEventListener(
      "resize",
      updateCardCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateCardCount
      );
    };
  }, []);

  // =========================================================
  // FILTER ORIGINAL PROJECTS
  // =========================================================

  const categoryProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  // =========================================================
  // CREATE ODD NUMBER OF SLIDES
  //
  // Desktop = 7
  // Tablet  = 5
  // Mobile  = 3
  //
  // If category has less projects,
  // repeat them until odd count is reached.
  // =========================================================

  const getOddProjects = () => {
    if (categoryProjects.length === 0) {
      return [];
    }

    /*
      We never want more than visibleCards.

      Example:

      8 projects + desktop
      => 7

      5 projects + desktop
      => 5

      4 projects + desktop
      => 5 by repeating

      2 projects + desktop
      => 7 by repeating

      1 project + desktop
      => 7 by repeating
    */

    let targetCount;

    if (
      categoryProjects.length >= visibleCards
    ) {
      targetCount = visibleCards;
    } else {
      /*
        If there are fewer projects,
        create the nearest required ODD count.

        1 -> 3
        2 -> 3
        3 -> 3
        4 -> 5
        5 -> 5
        6 -> 7
        7 -> 7
      */

      if (categoryProjects.length <= 3) {
        targetCount = 3;
      } else if (
        categoryProjects.length <= 5
      ) {
        targetCount = 5;
      } else {
        targetCount = 7;
      }
    }

    const result = [];

    for (let i = 0; i < targetCount; i++) {
      const original =
        categoryProjects[
          i % categoryProjects.length
        ];

      /*
        Unique key for repeated cards
      */

      result.push({
        ...original,
        slideId: `${original.id}-${i}`,
      });
    }

    return result;
  };

  const filteredProjects =
    getOddProjects();

  // =========================================================
  // RESET ACTIVE INDEX WHEN CATEGORY / SCREEN CHANGES
  // =========================================================

  useEffect(() => {
    setActiveIndex(0);
  }, [
    activeCategory,
    visibleCards,
  ]);

  // =========================================================
  // GO TO SLIDE
  // =========================================================

  const goToSlide = (index) => {
    const total =
      filteredProjects.length;

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

    e.currentTarget.setPointerCapture?.(
      e.pointerId
    );
  };

  // =========================================================
  // POINTER MOVE
  // =========================================================

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const difference =
      e.clientX - startX.current;

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
      e.currentTarget.releasePointerCapture?.(
        e.pointerId
      );
    } catch (error) {
      // Ignore
    }
  };

  // =========================================================
  // GET CIRCULAR DIFFERENCE
  // =========================================================

  const getDifference = (index) => {
    const total =
      filteredProjects.length;

    if (!total) return 999;

    let difference =
      index - activeIndex;

    /*
      Circular slider
    */

    if (
      difference >
      Math.floor(total / 2)
    ) {
      difference -= total;
    }

    if (
      difference <
      -Math.floor(total / 2)
    ) {
      difference += total;
    }

    return difference;
  };

  // =========================================================
  // GET CARD CLASS
  // =========================================================

  const getCardClass = (index) => {
    const difference =
      getDifference(index);

    // CENTER
    if (difference === 0) {
      return "work-card is-center";
    }

    // LEFT 1
    if (difference === -1) {
      return "work-card is-left";
    }

    // RIGHT 1
    if (difference === 1) {
      return "work-card is-right";
    }

    // LEFT 2
    if (difference === -2) {
      return "work-card is-far-left";
    }

    // RIGHT 2
    if (difference === 2) {
      return "work-card is-far-right";
    }

    // LEFT 3
    if (difference === -3) {
      return "work-card is-far-left-2";
    }

    // RIGHT 3
    if (difference === 3) {
      return "work-card is-far-right-2";
    }

    // EVERYTHING ELSE
    return "work-card is-hidden";
  };

  // =========================================================
  // CATEGORY CHANGE
  // =========================================================

  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);

    /*
      New selected category always
      starts from center.
    */

    setActiveIndex(0);
  };

  // =========================================================
  // JSX
  // =========================================================

  return (
    <section
      className="work-section"
      id="work"
    >
      <div className="work-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="work-header">
      <Heading
heading="Work"
/>
          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="work-filters">

            {categories.map(
              (category, index) => (
                <React.Fragment
                  key={category}
                >

                  <button
                    type="button"
                    className={`work-filter ${
                      activeCategory ===
                      category
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                  >
                    {category}
                  </button>

                  {index !==
                    categories.length - 1 && (
                    <span className="work-filter-divider">
                      |
                    </span>
                  )}

                </React.Fragment>
              )
            )}

          </div>

        </div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          className={`work-slider visible-${visibleCards}`}
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerUp
          }
        >

          <div className="work-slider-stage">

            {filteredProjects.map(
              (project, index) => (
                <div
                  key={project.slideId}
                  className={getCardClass(
                    index
                  )}
                  onClick={() =>
                    setActiveIndex(index)
                  }
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
              )
            )}

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