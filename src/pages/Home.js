import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Experties from "../components/Experties";
import Work from "../components/Work";
import Reel from "../components/Reel";
import Team from "../components/Team";

import SectionReveal from "../components/SectionReveal";

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        {/* Primary */}
        <title>VisFlix Studio | Pre-Production, Production & Post-Production House</title>
        <meta
          name="description"
          content="VisFlix Studio is Mumbai's premier creative production house — Films, TVCs, Music Videos, VFX, DI Color Grading & AI Video Production. 10+ years | 100+ Projects | 500+ Shots."
        />
        <meta
          name="keywords"
          content="VisFlix Studio, film production house Mumbai, VFX studio India, DI color grading, pre-production company, post-production house, TVC production, music video production, AI video production, Bareilly film studio, feature film production India"
        />
        <link rel="canonical" href="https://visflixstudio.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VisFlix Studio" />
        <meta property="og:title" content="VisFlix Studio | Pre-Production, Production & Post-Production House" />
        <meta
          property="og:description"
          content="From concept to final cut — VisFlix Studio delivers world-class feature films, TVCs, series, music videos, VFX, DI Color Grading & AI Video Production. 10+ years of cinematic excellence."
        />
        <meta property="og:url" content="https://visflixstudio.com/" />
        <meta property="og:image" content="https://visflixstudio.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@visflixstudio" />
        <meta name="twitter:title" content="VisFlix Studio | Creative Production House" />
        <meta
          name="twitter:description"
          content="Pre-Production, Production & Post-Production — Films, TVCs, VFX, Color Grading & AI Video. Based in Mumbai, Delhi & Bareilly."
        />
        <meta name="twitter:image" content="https://visflixstudio.com/og-image.png" />

        {/* VideoObject Schema for Showreels */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "VisFlix Studio Showreels",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "VideoObject",
                  "name": "VisFlix Studio – Filmmaking Showreel",
                  "description": "Filmmaking showreel by VisFlix Studio showcasing direction, cinematography and production work.",
                  "thumbnailUrl": "https://visflixstudio.com/og-image.png",
                  "uploadDate": "2024-01-01",
                  "contentUrl": "https://youtu.be/T4JMJuQ7GCE",
                  "embedUrl": "https://www.youtube.com/embed/T4JMJuQ7GCE"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "VideoObject",
                  "name": "VisFlix Studio – VFX Showreel",
                  "description": "Visual Effects showreel featuring VFX compositing and CGI work by VisFlix Studio.",
                  "thumbnailUrl": "https://visflixstudio.com/og-image.png",
                  "uploadDate": "2024-01-01",
                  "contentUrl": "https://youtu.be/LoNrxRUGQ6U",
                  "embedUrl": "https://www.youtube.com/embed/LoNrxRUGQ6U"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "VideoObject",
                  "name": "VisFlix Studio – DI & Color Grading Showreel",
                  "description": "Digital Intermediate and Color Grading showreel by VisFlix Studio.",
                  "thumbnailUrl": "https://visflixstudio.com/og-image.png",
                  "uploadDate": "2024-01-01",
                  "contentUrl": "https://youtu.be/TN7i-cTTNfY",
                  "embedUrl": "https://www.youtube.com/embed/TN7i-cTTNfY"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "VideoObject",
                  "name": "VisFlix Studio – AI Video Production Showreel",
                  "description": "AI-powered video production showreel by VisFlix Studio.",
                  "thumbnailUrl": "https://visflixstudio.com/og-image.png",
                  "uploadDate": "2024-01-01",
                  "contentUrl": "https://www.youtube.com/shorts/6tgFKKpKedw",
                  "embedUrl": "https://www.youtube.com/embed/6tgFKKpKedw"
                }
              }
            ]
          }
        `}</script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://visflixstudio.com/"
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero */}
      <Hero />

      {/* About */}
      <SectionReveal>
        <HomeAbout />
      </SectionReveal>

      {/* Expertise */}
      <SectionReveal>
        <Experties/>
      </SectionReveal>

      {/* Work */}
      <SectionReveal>
        <Work />
      </SectionReveal>

      {/* Reel */}
      <SectionReveal>
        <Reel />
      </SectionReveal>

      {/* Team */}
      <SectionReveal>
        <Team />
      </SectionReveal>

      {/* Movies */}


    </div>
  );
};

export default Home;