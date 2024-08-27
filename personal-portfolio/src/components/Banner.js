import Container from "react-bootstrap/esm/Container";
import {Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`My name is Milen and I'm a junior frontend developer.`}</h1>
                    <p>My passions are: 1. 2. 3. 4. 5.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}