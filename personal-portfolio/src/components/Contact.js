import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact_img from "../assets/img/contact_img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending");
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails)
      });

      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if(result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully"});
      } else {
        setStatus({ success: false, message: "Something went wrong! Please try again!"});
      }

  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact_img} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form className="form-inner" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Your Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                    status.message && 
                    <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
