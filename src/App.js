import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";

import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* ── Primary Meta ── */}
        <html lang="en" />
        <title>VisFlix Studio | Pre-Production, Production & Post-Production House</title>
        <meta
          name="description"
          content="VisFlix Studio is a premier creative production house specializing in Pre-Production, Production, and Post-Production for feature films, TVCs, music videos, VFX, DI Color Grading, and AI Video Production. Based in Mumbai, Delhi & Bareilly with 10+ years of industry experience."
        />
        <meta name="keywords" content="VisFlix Studio, film production house, VFX studio, DI color grading, pre-production, post-production, TVC production, music video production, AI video production, Mumbai film studio, Bareilly production house" />
        <meta name="author" content="VisFlix Studio" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#171717" />

        {/* ── Google Site Verification ── */}
        <meta name="google-site-verification" content="OEsG-xBkivydfz-NtyZZG4oc1YLduIldzZgmXu93RZA" />

        {/* ── Canonical ── */}
        <link rel="canonical" href="https://visflixstudio.com/" />

        {/* ── Open Graph (Facebook / LinkedIn / WhatsApp) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VisFlix Studio" />
        <meta property="og:title" content="VisFlix Studio | Pre-Production, Production & Post-Production House" />
        <meta
          property="og:description"
          content="From concept to final cut — VisFlix Studio delivers world-class feature films, TVCs, series, music videos, VFX, DI Color Grading & AI Video Production. 10+ years of cinematic excellence."
        />
        <meta property="og:url" content="https://visflixstudio.com/" />
        <meta property="og:image" content="https://visflixstudio.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VisFlix Studio | Pre-Production, Production & Post-Production House" />
        <meta
          name="twitter:description"
          content="From concept to final cut — VisFlix Studio delivers world-class feature films, TVCs, series, music videos, VFX, DI Color Grading & AI Video Production."
        />
        <meta name="twitter:image" content="https://visflixstudio.com/og-image.jpg" />

        {/* ── Schema.org Structured Data (JSON-LD) for AI crawlers ── */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VisFlix Studio",
            "url": "https://visflixstudio.com",
            "logo": "https://visflixstudio.com/logo512.png",
            "description": "VisFlix Studio is a premier creative Pre-Production, Production and Post-Production house delivering world-class visual experiences for feature films, TVCs, series, music videos, digital campaigns and AI-powered cinematic productions.",
            "foundingDate": "2014",
            "areaServed": ["Mumbai", "Delhi", "Bareilly", "India"],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-75-0586-7318",
              "contactType": "Customer Support",
              "email": "studiovisflix@gmail.com"
            },
            "sameAs": [
              "https://www.instagram.com/visflixstudio",
              "https://www.facebook.com/VisflixStudio",
              "https://www.linkedin.com/company/visflix-studio/",
              "https://youtube.com/@visflixstudio"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Production Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pre-Production (Concept, Script, Storyboard, Casting)"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Production (Direction, Cinematography, Ad Films, TVCs, Music Videos)"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Post-Production (VFX, DI Color Grading, Video Editing, Motion Graphics, AI Video)"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Films & Digital Campaigns"}}
              ]
            }
          }
        `}</script>
      </Helmet>

      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;