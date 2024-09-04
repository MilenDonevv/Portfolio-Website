import { Col, Container, Row } from "react-bootstrap";
import nav_icon1 from "../assets/img/nav_icon1.svg";
import nav_icon2 from "../assets/img/icons8-github-64.svg";
import nav_icon3 from "../assets/img/nav_icon2.svg";
import DOWNLOAD_icon from "../assets/img/DOWNLOAD_icon.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ paddingBottom: '50px', paddingTop: '20px' }}>
  <Container>
    <Row className="align-items-center">
      <Col sm={12} className="text-center">
        <div className="social-icons-and-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/milen-donev-00b031227/" target="_blank" rel="noopener noreferrer">
              <img src={nav_icon1} alt="LinkedIn" />
            </a>
            <a href="https://github.com/MilenDonevv" target="_blank" rel="noopener noreferrer">
              <img src={nav_icon2} alt="GitHub" />
            </a>
            <a href="https://www.facebook.com/Milen.Donev95" target="_blank" rel="noopener noreferrer">
              <img src={nav_icon3} alt="Facebook" />
            </a>
            <a href="https://milendonevv.github.io/Portfolio-Website/assets/Milen_Donev_CV.pdf" target="_blank" rel="noopener noreferrer">
              <img src={DOWNLOAD_icon} alt="Download CV" />
            </a>
          </div>
          <p className="footer-text">@2024 Milen Donev</p>
        </div>
      </Col>
    </Row>
  </Container>
</footer>
  );
};
