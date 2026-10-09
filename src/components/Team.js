
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../components/Heading";

import "swiper/css";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    image: require("../assets/team/Ajeet Chauhan blck.jpg"),
    colorImage: require("../assets/team/Ajeet Chauhan.jpg"),
    designation: "Founder | Creative Director",
    name: "Ajeet Chauhan",
  },
  {
    id: 2,
    image: require("../assets/team/Bharat Chandra blck.jpg"),
    colorImage: require("../assets/team/Bharat Chandra.jpg"),
    designation: "Film Director | DI Colourist",
    name: "Bharat Chandra",
  },
  {
    id: 3,
    image: require("../assets/team/Nikhil Chauhan blck.jpg"),
    colorImage: require("../assets/team/Nikhil Chauhan.jpg"),
    designation: "Creative Producer",
    name: "Nikhil Chauhan",
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
    image: require("../assets/team/Manisha Chandra blck.jpg"),
    colorImage: require("../assets/team/Manisha Chandra.jpg"),
    designation: "Filmmaker",
    name: "Manisha Chandra",
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
          <Swiper
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
                  <div className="team-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image team-image-bw"
                    />

                    <img
                      src={member.colorImage}
                      alt={`${member.name} in color`}
                      className="team-image team-image-color"
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
