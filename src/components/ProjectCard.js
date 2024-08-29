import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="project-button">Check it out</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
