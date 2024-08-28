import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm.js";
import logo from '../assets/img/logo.svg';
import nav_icon1 from '../assets/img/nav_icon1.svg';
import nav_icon2 from '../assets/img/nav_icon2.svg';
import nav_icon3 from '../assets/img/nav_icon3.svg';


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
                            <a href=""><img src={nav_icon1} /></a>
                            <a href=""><img src={nav_icon2} /></a>
                            <a href=""><img src={nav_icon3} /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}