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
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      const errorResult = await response.json();
      setStatus({ success: false, message: errorResult.message });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact_img} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In touch with me</h2>
            <form className="form-inner" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Your Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    style={{ width: '100%', resize: 'vertical' }}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <button 
                    type="submit" 
                    style={{ 
                      width: '100%', 
                      borderRadius: '10px', 
                      padding: '14px 0', 
                      fontSize: '18px' 
                    }}
                  >
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {
                    status.message && 
                    <Col sm={12}>
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
