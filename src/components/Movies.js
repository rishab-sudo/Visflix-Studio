import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Movies.css";

const categories = {
  movies: {
    title: "MOVIES",
    items: [
      {
        id: "movie-1",
        image: require("../assets/experty1.png"),
        title: "Movie One",
      },
      {
        id: "movie-2",
        image: require("../assets/experty1.png"),
        title: "Movie Two",
      },
      {
        id: "movie-3",
        image: require("../assets/experty1.png"),
        title: "Movie Three",
      },
      {
        id: "movie-4",
        image: require("../assets/experty1.png"),
        title: "Movie Four",
      },
      {
        id: "movie-5",
        image: require("../assets/experty1.png"),
        title: "Movie Five",
      },
      {
        id: "movie-6",
        image: require("../assets/experty1.png"),
        title: "Movie Six",
      },
    ],
  },

  tvcs: {
    title: "TVCS",
    items: [
      {
        id: "tvc-1",
        image: require("../assets/experty1.png"),
        title: "TVC One",
      },
      {
        id: "tvc-2",
        image: require("../assets/experty1.png"),
        title: "TVC Two",
      },
      {
        id: "tvc-3",
        image: require("../assets/experty1.png"),
        title: "TVC Three",
      },
      {
        id: "tvc-4",
        image: require("../assets/experty1.png"),
        title: "TVC Four",
      },
      {
        id: "tvc-5",
        image: require("../assets/experty1.png"),
        title: "TVC Five",
      },
      {
        id: "tvc-6",
        image: require("../assets/experty1.png"),
        title: "TVC Six",
      },
    ],
  },

  tvSerials: {
    title: "TV SERIALS",
    items: [
      {
        id: "serial-1",
        image: require("../assets/experty1.png"),
        title: "TV Serial One",
      },
      {
        id: "serial-2",
        image: require("../assets/experty1.png"),
        title: "TV Serial Two",
      },
      {
        id: "serial-3",
        image: require("../assets/experty1.png"),
        title: "TV Serial Three",
      },
      {
        id: "serial-4",
        image: require("../assets/experty1.png"),
        title: "TV Serial Four",
      },
      {
        id: "serial-5",
        image: require("../assets/experty1.png"),
        title: "TV Serial Five",
      },
      {
        id: "serial-6",
        image: require("../assets/experty1.png"),
        title: "TV Serial Six",
      },
    ],
  },

  musicVideos: {
    title: "MUSIC VIDEOS",
    items: [
      {
        id: "music-1",
        image: require("../assets/experty1.png"),
        title: "Music Video One",
      },
      {
        id: "music-2",
        image: require("../assets/experty1.png"),
        title: "Music Video Two",
      },
      {
        id: "music-3",
        image: require("../assets/experty1.png"),
        title: "Music Video Three",
      },
      {
        id: "music-4",
        image: require("../assets/experty1.png"),
        title: "Music Video Four",
      },
      {
        id: "music-5",
        image: require("../assets/experty1.png"),
        title: "Music Video Five",
      },
      {
        id: "music-6",
        image: require("../assets/experty1.png"),
        title: "Music Video Six",
      },
    ],
  },
};

const tabs = [
  {
    key: "all",
    label: "ALL",
  },
  {
    key: "movies",
    label: "MOVIES",
  },
  {
    key: "tvcs",
    label: "TVCS",
  },
  {
    key: "tvSerials",
    label: "TV SERIALS",
  },
  {
    key: "musicVideos",
    label: "MUSIC VIDEOS",
  },
];

const categoryKeys = [
  "movies",
  "tvcs",
  "tvSerials",
  "musicVideos",
];

const Movies = () => {
  const [activeTab, setActiveTab] = useState("all");

  // =========================================
  // FIX: force a layout recalculation on mount.
  // Root cause: this component (or Swiper inside it) is
  // rendered while an ancestor wrapper (page-transition /
  // route wrapper / matchMedia-based layout) hasn't finished
  // its first layout pass, so it paints with 0 height / no
  // background until something (resize) forces a reflow.
  // Dispatching a resize event right after mount makes Swiper
  // and any matchMedia listeners in the parent recompute
  // immediately instead of waiting for a real resize.
  // This is a workaround — the real fix belongs in whatever
  // wraps <Movies /> (see note below).
  // =========================================
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // =========================================
  // CATEGORY HEADING
  // =========================================

  const renderHeading = (title) => {
    return (
      <div className="category-heading">
        <span className="category-line"></span>
        <h2>{title}</h2>
      </div>
    );
  };

  // =========================================
  // DESKTOP GRID
  // =========================================

  const renderDesktopGrid = (category) => {
    if (!category || !category.items) {
      return null;
    }

    return (
      <div className="movies-desktop-grid">
        {category.items.map((item) => (
          <div className="movie-card" key={item.id}>
            <div className="movie-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="movie-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  // =========================================
  // TABLET + MOBILE SLIDER
  // =========================================

  const renderMobileSlider = (category, sliderKey) => {
    if (!category || !category.items) {
      return null;
    }

    return (
      <div className="movies-mobile-slider">
        <Swiper
          key={sliderKey}
          modules={[Navigation]}
          navigation={category.items.length > 1}
          centeredSlides={false}
          grabCursor={true}
          speed={600}
          spaceBetween={16}
          slidesPerView={1.15}
          watchOverflow={true}
          observer={true}
          observeParents={true}
          breakpoints={{
            // Small mobile
            375: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },

            // Large mobile
            480: {
              slidesPerView: 1.35,
              spaceBetween: 18,
            },

            // Small tablet
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            // Tablet
            768: {
              slidesPerView: 2.4,
              spaceBetween: 24,
            },

            // Small laptop/tablet landscape
            900: {
              slidesPerView: 2.7,
              spaceBetween: 25,
            },
          }}
          className="movies-swiper"
        >
          {category.items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="movie-card">
                <div className="movie-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="movie-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <section className="movies-section">
      <div className="movies-container">

        {/* =========================================
            TABS
        ========================================= */}

        <div className="movies-tabs">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.key}>
              <button
                type="button"
                className={`movies-tab ${
                  activeTab === tab.key ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>

              {index < tabs.length - 1 && (
                <span className="tab-separator">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* =========================================
            ALL TAB
        ========================================= */}

        {activeTab === "all" && (
          <>
            {/* DESKTOP */}

            <div className="movies-all-desktop">
              {categoryKeys.map((key) => {
                const category = categories[key];

                return (
                  <div
                    className="movie-category"
                    key={key}
                  >
                    {renderHeading(category.title)}

                    {renderDesktopGrid(category)}
                  </div>
                );
              })}
            </div>

            {/* TABLET + MOBILE */}

            <div className="movies-all-mobile">
              {categoryKeys.map((key) => {
                const category = categories[key];

                return (
                  <div
                    className="movie-category"
                    key={`mobile-${key}`}
                  >
                    {renderHeading(category.title)}

                    {renderMobileSlider(
                      category,
                      `mobile-${key}`
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* =========================================
            SELECTED CATEGORY
        ========================================= */}

        {activeTab !== "all" && (
          <div className="movie-category selected-category">

            {renderHeading(
              categories[activeTab].title
            )}

            {/* DESKTOP */}

            <div className="selected-desktop">
              {renderDesktopGrid(
                categories[activeTab]
              )}
            </div>

            {/* TABLET + MOBILE */}

            <div className="selected-mobile">
              {renderMobileSlider(
                categories[activeTab],
                `selected-${activeTab}`
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Movies;