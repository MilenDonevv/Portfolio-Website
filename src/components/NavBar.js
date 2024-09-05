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
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <div className="navbar-text d-flex align-items-center flex-column flex-lg-row">
                        <div className="social-icon d-flex justify-content-center mb-3 mb-lg-0">
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
                        <button 
                            className="vvd btn btn-primary mt-3 mt-lg-0 ms-lg-3 d-none d-lg-block"  
                            onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>Let's Connect</span>
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
