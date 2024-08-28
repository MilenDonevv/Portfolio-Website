import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import project_1_img from "../assets/img/project_1_img.png";
import project_2_img from "../assets/img/project_2_img.png";

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
            <h2>Projects</h2>
            <p>Lorem Ipsum alaba bala some description za proektite</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="advanced">
              <Nav variant="pills" defaultActiveKey="/home">
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
            </Tab.Container>
            <Tab.Content>
                <Tab.Pane eventKey="basic">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <p>{project.title}</p>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="intermediate">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="advanced">Moren Bibsim</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
