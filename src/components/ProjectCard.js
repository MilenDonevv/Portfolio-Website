import { Col } from "react-bootstrap"


export const ProjectCard = ({ title, description, imgUrl}) => {

    
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project-image"/>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}