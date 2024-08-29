import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm.js";
import logo from "../assets/img/logo.png";
import nav_icon1 from "../assets/img/nav_icon1.svg";
import nav_icon2 from "../assets/img/icons8-github-64.svg";
import nav_icon3 from "../assets/img/nav_icon2.svg";
import DOWNLOAD_icon from "../assets/img/DOWNLOAD_icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/milen-donev-00b031227/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nav_icon1} alt="Linked-In" />
              </a>
              <a
                href="https://github.com/MilenDonevv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nav_icon2} alt="GitHub" />
              </a>
              <a
                href="https://www.facebook.com/Milen.Donev95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nav_icon3} alt="Facebook" />
              </a>
              <a
                href="https://www.facebook.com/Milen.Donev95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DOWNLOAD_icon} alt="Facebook" />
              </a>
            </div>
            <p>@2024 Milen Donev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
