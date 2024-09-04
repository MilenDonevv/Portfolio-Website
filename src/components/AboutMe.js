import React from "react";
import Experience from "./Experience.js";
import Me from '../assets/img/me.png'

export const AboutMe = () => {
  return (
    <div className="about-experience-container">
      <div className="about-me-container">
        <div className="about-me-section">
          <h2 className="about-me-title">About me</h2>
          <p className="about-me-text">
            From an early age, I’ve been fascinated by how technology works, 
            but it wasn’t until recently that I had the opportunity to delve deeper into this passion of mine. 
            With the ever-growing importance of our technological advancements in this increasingly digital future, 
            I’ve come to believe that working in the tech domain is more crucial than ever. 
            Outside of coding, I enjoy working out, socializing with people,
            reading books, and keeping up with the latest and greatest news from different specters of life. 
          </p>
        </div>
        <div className="about-me-image">
          <img src={Me} alt="Picture of me" />
        </div>
      </div>
      <Experience />
    </div>
  );
};
