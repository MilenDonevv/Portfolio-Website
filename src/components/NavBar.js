import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png';
import nav_icon1 from '../assets/img/nav_icon1.svg';
import nav_icon2 from '../assets/img/icons8-github-64.svg';
import nav_icon3 from '../assets/img/nav_icon2.svg';
import DOWNLOAD_icon from '../assets/img/DOWNLOAD_icon.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
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
                <a href="/assets/CV_Milen_Donev.pdf" target="_blank" rel="noopener noreferrer">
                  <img src={DOWNLOAD_icon} alt="Download CV" />
                </a>
              </div>
              <button className="vvd" onClick={() => document.getElementById('connect').scrollIntoView({behavior: 'smooth'})}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
