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
            but it wasn’t until 2023 that I had the opportunity to go deeper in some introductory
            tutorials and created my first CV using nothing but HTML. I was immediately captivated by the 
            way code is developed and realized it's high time I take on this passion of mine seriously. 
            With the ever-growing importance of our technological advancements in this increasingly digital future, 
            I’ve come to believe that growing my skills in the tech domain is more crucial than ever.</p>
            
          <p className="about-me-text">
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
