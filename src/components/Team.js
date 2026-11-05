import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../components/Heading";

import "swiper/css";
import "swiper/css/navigation";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    image: require("../assets/team/Ajeet Chauhan blck.jpg"),
    colorImage: require("../assets/team/Ajeet Chauhan.jpg"),
    designation: "Founder | Creative Director",
    name: "Ajeet Chauhan",
    focusUp: true,
  },
  {
    id: 2,
    image: require("../assets/team/Bharat Chandra blck.jpg"),
    colorImage: require("../assets/team/Bharat Chandra.jpg"),
    mobileImage: require("../assets/Bharat Chandra_mobile.jpeg"),
    designation: "Film Director | DI Colourist",
    name: "Bharat Chandra",
  },
  {
    id: 3,
    image: require("../assets/team/Manisha Chandra blck.jpg"),
    colorImage: require("../assets/team/Manisha Chandra.jpg"),
    mobileImage: require("../assets/Manisha Chandra_mobile.jpeg"),
    designation: "Filmmaker",
    name: "Manisha Chandra",
  },
  {
    id: 4,
    image: require("../assets/team/Aman Singh blck.jpg"),
    colorImage: require("../assets/team/Aman Singh.jpg"),
    designation: "VFX Director",
    name: "Aman Singh",
  },
  {
    id: 5,
    image: require("../assets/team/Himanshu Kanojiya blck.jpg"),
    colorImage: require("../assets/team/Himanshu Kanojiya.jpg"),
    designation: "AI Video Producer",
    name: "Himanshu Kanojiya",
  },
  {
    id: 6,
    image: require("../assets/team/Nikhil Chauhan blck.jpg"),
    colorImage: require("../assets/team/Nikhil Chauhan.jpg"),
    designation: "Creative Producer",
    name: "Nikhil Chauhan",
  },
  {
    id: 7,
    image: require("../assets/team/Shikhar Chauhan blck.jpg"),
    colorImage: require("../assets/team/Shikhar Chauhan.jpg"),
    designation: "D O P",
    name: "Shikhar Chauhan",
  },
  {
    id: 8,
    image: require("../assets/team/Ajit Bharti blck.jpg"),
    colorImage: require("../assets/team/Ajit Bharti.jpg"),
    designation: "Cinematographer",
    name: "Ajit Bharti",
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <Heading heading="meet my team" />

        <div className="team-slider-wrapper">

          <button
            type="button"
            className="team-prev"
            aria-label="Previous team members"
          >
            <FaChevronLeft />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            className="team-swiper"
            slidesPerView={4}
            spaceBetween={35}
            slidesPerGroup={1}
            speed={700}
            grabCursor={true}
            watchOverflow={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="team-card">

                  <div
                    className={
                      member.mobileImage
                        ? "team-image-wrapper-custom"
                        : "team-image-wrapper"
                    }
                  >

                    {/* BLACK & WHITE IMAGE */}

                    <picture>
                      {member.mobileImage && (
                        <source
                          media="(max-width: 767px)"
                          srcSet={member.mobileImage}
                        />
                      )}

                      <img
                        src={member.image}
                        alt={member.name}
                        className={
                          (member.mobileImage
                            ? "team-image-bw-custom"
                            : "team-image-bw") +
                          (member.focusUp ? " team-image-focus-up" : "")
                        }
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                    {/* COLOUR IMAGE */}

                    <picture>
                      {member.mobileImage && (
                        <source
                          media="(max-width: 767px)"
                          srcSet={member.mobileImage}
                        />
                      )}

                      <img
                        src={member.colorImage}
                        alt=""
                        aria-hidden="true"
                        className={
                          (member.mobileImage
                            ? "team-image-color-custom"
                            : "team-image-color") +
                          (member.focusUp ? " team-image-focus-up" : "")
                        }
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>

                  </div>

                  <div className="team-info">

                    <div className="team-designation-box">
                      <p className="page-text">
                        {member.designation}
                      </p>
                    </div>

                    <div className="team-name-box">
                      <h3 className="section-heading">
                        {member.name}
                      </h3>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="team-next"
            aria-label="Next team members"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Team;