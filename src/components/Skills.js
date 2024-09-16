import { Col, Container, Row } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTML_icon from '../assets/img/HTML_icon.svg'
import CSS_icon from '../assets/img/CSS_icon.svg'
import BOOTSTRAP_icon from '../assets/img/BOOTSTRAP_icon.svg'
import ESLINT_icon from '../assets/img/ESLINT_icon.svg'
import FIREBASE_icon from '../assets/img/FIREBASE_icon.svg'
import GIT_icon from '../assets/img/GIT_icon.svg'
import GITHUB_icon from '../assets/img/GITHUB_icon.svg'
import JAVASCRIPT_icon from '../assets/img/JAVASCRIPT_icon.svg'
import JEST_icon from '../assets/img/JEST_icon.svg'
import MONGODB_icon from '../assets/img/MONGODB_icon.svg'
import NODEJS_icon from '../assets/img/NODEJS_icon.svg'
import NPM_icon from '../assets/img/NPM_icon.svg'
import REACT_icon from '../assets/img/REACT_icon.svg'
import TAILWIND_icon from '../assets/img/TAILWIND_icon.svg'
import colorSharp from '../assets/img/color_sharp.png';
import TYPESCRIPT_icon from '../assets/img/TYPESCRIPT_icon.svg'
import POSTMAN_icon from '../assets/img/POSTMAN_icon.svg'
import VITE_icon from '../assets/img/VITE_icon.svg'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={HTML_icon} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS_icon} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={BOOTSTRAP_icon} alt="Bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={TAILWIND_icon} alt="Tailwind" />
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <img src={JAVASCRIPT_icon} alt="Javascript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={REACT_icon} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={TYPESCRIPT_icon} alt="Typescript" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={NPM_icon} alt="NPM" />
                                    <h5>NPM</h5>
                                </div>
                                <div className="item">
                                    <img src={GIT_icon} alt="GIT" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={GITHUB_icon} alt="Github" />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={FIREBASE_icon} alt="Firebase" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={MONGODB_icon} alt="MongoDB" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={POSTMAN_icon} alt="Postman" />
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <img src={VITE_icon} alt="Vite" />
                                    <h5>Vite</h5>
                                </div>
                                <div className="item">
                                    <img src={JEST_icon} alt="Jest" />
                                    <h5>Jest</h5>
                                </div>
                                <div className="item">
                                    <img src={ESLINT_icon} alt="ESLint" />
                                    <h5>ESLint</h5>
                                </div>
                                <div className="item">
                                    <img src={NODEJS_icon} alt="Node JS" />
                                    <h5>Node JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="color-image"/>
        </section>
    )
    
}