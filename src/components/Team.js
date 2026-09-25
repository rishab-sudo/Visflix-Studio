import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    image: "/images/team1.jpg",
    designation: "Founder | Creative Director",
    name: "Ajeet Chauhan",
  },
  {
    id: 2,
    image: "/images/team2.jpg",
    designation: "VFX Director",
    name: "Aman Singh",
  },
  {
    id: 3,
    image: "/images/team3.jpg",
    designation: "Film Director | DI Colourist",
    name: "Bharat Chandra",
  },
  {
    id: 4,
    image: "/images/team4.jpg",
    designation: "Ai Video Producer | Motion Designer",
    name: "Himanshu Kanojiya",
  },

{
    id: 5,
    image: "/images/team5.jpg",
    designation: "Creative Producer",
    name: "Member Name",
  },

  {
    id: 6,
    image: "/images/team6.jpg",
    designation: "VFX Artist",
    name: "Member Name",
  },
];

const Team = () => {
  return (
    
    <section className="team-section" id="team">
      <div className="team-container">

        {/* Heading */}
        <div className="team-heading">
          <span className="team-heading-line"></span>

          <h2>MEET MY TEAM</h2>
        </div>

        {/* Slider */}
        <div className="team-slider-wrapper">
          <Swiper
            className="team-swiper"
            slidesPerView={4}
            spaceBetween={35}
            slidesPerGroup={1}
            speed={700}
            grabCursor={true}
            watchOverflow={true}
            breakpoints={{
              // Mobile
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },

              // Small tablet
              576: {
                slidesPerView: 2,
                spaceBetween: 22,
                slidesPerGroup: 1,
              },

              // Tablet / laptop
              992: {
                slidesPerView: 3,
                spaceBetween: 28,
                slidesPerGroup: 1,
              },

              // Large desktop
              1200: {
                slidesPerView: 4,
                spaceBetween: 35,
                slidesPerGroup: 1,
              },
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-card">

                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                  </div>

                  <div className="team-info">
                    <p className="team-designation">
                      {member.designation}
                    </p>

                    <h3 className="team-name">
                      {member.name}
                    </h3>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Team;