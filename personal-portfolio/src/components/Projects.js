import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import project_1_img from "../assets/img/project_1_img.png";
import project_2_img from "../assets/img/project_2_img.png";
import { ProjectCard } from "./ProjectCard";
import color_sharp2 from "../assets/img/color_sharp2.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "ReactVenture",
      description: "Travel forum",
      imgUrl: project_1_img,
    },
    {
      title: "PlanPal",
      description: "Planning & Organizing Events Application",
      imgUrl: project_2_img,
    },
    {
      title: "Project3",
      description: "Travel forum",
      imgUrl: project_1_img,
    },
    {
      title: "Project4",
      description: "Planning & Organizing Events Application",
      imgUrl: project_2_img,
    },
    {
      title: "Project5",
      description: "Travel forum",
      imgUrl: project_1_img,
    },
    {
      title: "Project6",
      description: "Planning & Organizing Events Application",
      imgUrl: project_2_img,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible }) => 
            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
            <h2>Projects</h2>
            <p>Lorem Ipsum alaba bala some description za proektite</p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="advanced">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="basic">Basic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="intermediate">Intermediate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="advanced">Advanced</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="basic">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          // {...project}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="intermediate">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="advanced">Moren Bibsim</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background-image-right"
        src={color_sharp2}
      />
    </section>
  );
};
