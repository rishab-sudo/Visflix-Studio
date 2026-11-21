
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Heading from "../components/Heading";
import "./Explore.css";

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

const projects = [
  { id: 1, title: "1000KM", category: "MOVIES", image: work1 },
  { id: 2, title: "Dwidha", category: "MOVIES", image: work2 },
  { id: 3, title: "Fakt Purusho Mate", category: "MOVIES", image: work3 },
  { id: 4, title: "Fari Ek Vaar", category: "MOVIES", image: work4 },
  { id: 5, title: "HAHACAR", category: "MOVIES", image: work5 },
  { id: 6, title: "Itta Kitta", category: "MOVIES", image: work6 },
  { id: 7, title: "Kasoombo", category: "MOVIES", image: work7 },
  { id: 8, title: "PSI Arjun", category: "MOVIES", image: work8 },
  { id: 9, title: "Trisha On The Rocks", category: "MOVIES", image: work9 },
  { id: 10, title: "Udan Chhu", category: "MOVIES", image: work10 },
  { id: 11, title: "Well Done CA Sahab", category: "MOVIES", image: work11 },
  { id: 12, title: "JSW Paints", category: "TVCS", image: work12 },
  { id: 13, title: "Out Karo", category: "TVCS", image: work13 },
  { id: 14, title: "Traya", category: "TVCS", image: work14 },
  { id: 15, title: "Hustlers", category: "SERIES", image: work15 },
  { id: 16, title: "Ek Mulaqaat", category: "MUSIC VIDEOS", image: work16 },
  { id: 17, title: "Hadh Se", category: "MUSIC VIDEOS", image: work17 },
  { id: 18, title: "Jhachdi", category: "MUSIC VIDEOS", image: work18 },
];

const categories = ["ALL", "MOVIES", "TVCS", "SERIES", "MUSIC VIDEOS"];

const categoryLabels = {
  MOVIES: "Movies",
  TVCS: "TVCs",
  SERIES: "Series",
  "MUSIC VIDEOS": "Music Videos",
};

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const sectionRefs = useRef({});
  const exploreRef = useRef(null);

  const groupedProjects = categories
    .filter((category) => category !== "ALL")
    .map((category) => ({
      category,
      items: projects.filter(
        (project) => project.category === category
      ),
    }))
    .filter((group) => group.items.length > 0);

  const scrollToElement = (element) => {
    if (!element) return;

    const headerOffset = 110;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "ALL") {
      scrollToElement(exploreRef.current);
      return;
    }

    scrollToElement(sectionRefs.current[category]);
  };

  return (
    <section
      className="explore-section"
      id="explore"
      ref={exploreRef}
    >
      <Helmet>
        <title>
          Explore Our Work | VisFlix Studio – Films, TVCs, Music Videos & VFX
        </title>

        <meta
          name="description"
          content="Explore the complete portfolio of VisFlix Studio — 18+ projects across Movies, TVCs, Web Series, and Music Videos. Featuring DI Color Grading, VFX compositing, and professional film direction."
        />

        <meta
          name="keywords"
          content="VisFlix Studio portfolio, 1000KM VFX, Dwidha color grade, Kasoombo DI, JSW Paints TVC, Hustlers series, Ek Mulaqaat music video, film production portfolio India, VFX showreel, color grading reel"
        />

        <link
          rel="canonical"
          href="https://visflixstudio.com/explore"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VisFlix Studio" />

        <meta
          property="og:title"
          content="Explore Our Work | VisFlix Studio – Films, TVCs, Music Videos & VFX"
        />

        <meta
          property="og:description"
          content="18+ projects across Movies, TVCs, Web Series, and Music Videos — DI Color Grading, VFX, Direction by VisFlix Studio."
        />

        <meta
          property="og:url"
          content="https://visflixstudio.com/explore"
        />

        <meta
          property="og:image"
          content="https://visflixstudio.com/og-image.png"
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@visflixstudio" />

        <meta
          name="twitter:title"
          content="Explore Our Work | VisFlix Studio – Films, TVCs, Music Videos & VFX"
        />

        <meta
          name="twitter:description"
          content="18+ projects — Movies, TVCs, Series, Music Videos. DI Color Grading, VFX & Direction by VisFlix Studio."
        />

        <meta
          name="twitter:image"
          content="https://visflixstudio.com/og-image.png"
        />

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "VisFlix Studio Portfolio",
            "description": "Complete portfolio of films, TVCs, web series and music videos by VisFlix Studio",
            "url": "https://visflixstudio.com/explore",
            "numberOfItems": 18,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "1000KM – VFX", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 2, "name": "Dwidha – VFX & DI Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 3, "name": "Fakt Purusho Mate – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 4, "name": "Fari Ek Vaar – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 5, "name": "HAHACAR – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 6, "name": "Itta Kitta – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 7, "name": "Kasoombo – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 8, "name": "PSI Arjun – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 9, "name": "Trisha On The Rocks – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 10, "name": "Udan Chhu – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 11, "name": "Well Done CA Sahab – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 12, "name": "JSW Paints – VFX & Direction", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 13, "name": "Out Karo – Direction", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 14, "name": "Traya – Direction", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 15, "name": "Hustlers – DI Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 16, "name": "Ek Mulaqaat – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 17, "name": "Hadh Se – Color Grade", "item": "https://visflixstudio.com/explore" },
              { "@type": "ListItem", "position": 18, "name": "Jhachdi – Color Grade", "item": "https://visflixstudio.com/explore" }
            ]
          }
          `}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://visflixstudio.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Explore",
                "item": "https://visflixstudio.com/explore"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="explore-container">

        {/* HEADER */}
        <div className="explore-header">

          <div className="explore-header-top">

           <Heading heading="Our Work" />


            <Link to="/" className="explore-back-link">
              <FaArrowLeft className="explore-back-icon" />

              <span className="desktop-back-text">
                Back to Home
              </span>

              <span className="mobile-back-text">
                Back
              </span>
            </Link>

          </div>

        </div>

        {/* CATEGORY FILTERS */}
        <div className="explore-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`explore-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CATEGORY CONTENT */}
        <div className="explore-all-content">

          {groupedProjects.map((group) => (
            <div
              className="explore-category-section"
              key={group.category}
              ref={(element) => {
                sectionRefs.current[group.category] = element;
              }}
              id={`explore-${group.category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >

              <div className="explore-category-heading">
                <h3>{categoryLabels[group.category]}</h3>
              </div>

              <div className="explore-grid">

                {group.items.map((project) => (
                  <div
                    className="explore-card"
                    key={project.id}
                  >

                    <div className="explore-card-inner">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="explore-card-image"
                        loading="lazy"
                        draggable="false"
                      />

                      <div className="explore-card-overlay">
                        <h3>{project.title}</h3>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Explore;
