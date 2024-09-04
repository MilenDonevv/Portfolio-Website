import React, { useState } from "react";
import contact_img from "../assets/img/contact_img.svg";
import Reveal from "./Reveal.js";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fullName = `${firstName} ${lastName}`;
    
    const form = e.target;
    const hiddenNameInput = document.createElement("input");
    hiddenNameInput.type = "hidden";
    hiddenNameInput.name = "name";
    hiddenNameInput.value = fullName;
    
    form.appendChild(hiddenNameInput);

    form.submit();  
  };

  return (
    <div className="contact-container" id="connect">
      <Reveal>
        <div className="contact-inner">
          <div className="contact-image-container">
            <img src={contact_img} alt="Contact Us" className="contact-image" />
          </div>
          <form
            action="https://getform.io/f/arolekyb"
            method="POST"
            className="contact-form"
            id="form"
            onSubmit={handleSubmit}
          >
            <h2>Get in touch with me</h2>
            <div className="form-grid">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              name="phone"
              required
            />
            <textarea
              name="textarea"
              id="message"
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">
              <span>Send</span>
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};
