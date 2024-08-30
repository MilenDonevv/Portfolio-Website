import React from "react";

const certificate = "https://learn.telerikacademy.com/mod/customcert/verify_certificate.php?contextid=99501&code=IsLl95lCws&qrcode=1";

const experiences = [
  {
    company: "Open to work",
    period: "06/2024 - currently",
    description:
      "I am currently beyond excited to find my first position as a Frontend Developer and eager to immerse myself in a collaborative and supportive work environment, look forward to leveraging my expertise to its fullest while continuously expanding my skill set. Armed with solid fundamentals in HTML, CSS, JavaScript, and contemporary frameworks such as React, I am passionate about engaging in pioneering projects and contribute to creating captivating user experiences",
  },
  {
    company: "Telerik Academy",
    period: "01/2024 - 06/2024",
    description: (
      <>
        Successfully completed the{" "}
        <a href={certificate} target="_blank" rel="noopener noreferrer">
          6-month Alpha JS Track program
        </a>
        , where I developed solid skills in JavaScript and modern web development from scratch. This program offered practical engagement with real-world projects, arming me with hands-on expertise in developing scalable web applications.
      </>
    ),
  },
];

const Experience = () => {
  return (
    <div className="about-experience-container">
      <h1 className="experience-title">Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-box">
          <h2 className="experience-company">{experience.company}</h2>
          <p className="experience-period">{experience.period}</p>
          <p className="experience-description">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
