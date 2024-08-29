import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import accordion from '../assets/img/accordion_icon.PNG'
import QRcode from '../assets/img/QR_generator_icon.PNG'
import image_slider from '../assets/img/image_slider_icon.PNG'
import light_dark from '../assets/img/light_dark_mode_icon1.PNG'
import modal_popup from '../assets/img/modal_popup_icon.PNG'
import random_color from '../assets/img/random_color_generator_icon.PNG'
import custom_scroll from '../assets/img/custom_scroll_indicator_icon.PNG'
import scroll_to_section from '../assets/img/scroll_to_a_particular_section_icon.PNG'
import star_rating from '../assets/img/star_rating_icon.PNG'
import tabs from '../assets/img/tabs_icon.PNG'
import tic_tac_toe from '../assets/img/Tic_tac_toe_icon.PNG'
import tree_view from '../assets/img/tree_view.PNG'
import onclick_outside from '../assets/img/use_Onclick_outside_custom_hook_icon.PNG'
import windows_resize from '../assets/img/use_window_resize_icon.PNG'
import weather_app from '../assets/img/weather_app_icon.PNG'
import expense_tracker from '../assets/img/expense_tracker_icon.PNG'
import project_1_img from "../assets/img/project_1_img.png";
import project_2_img from "../assets/img/project_2_img.png";
import { ProjectCard } from "./ProjectCard";
import color_sharp2 from "../assets/img/color_sharp2.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Projects = () => {

  const basicProjects = [
    {
      title: "Accordion",
      description: "Showing and hiding different sections",
      imgUrl: accordion,
      url: "https://accordion-81crhmgbk-milen-s-projects.vercel.app"
    },
    {
      title: "Image Slider",
      description: "Previews a series of images",
      imgUrl: image_slider,
      url: "https://image-slider-ikwxo9ovp-milen-s-projects.vercel.app/"
    },
    {
      title: "Light & Dark mode",
      description: "Changes between light and dark theme",
      imgUrl: light_dark,
      url: "https://ligh-dark-mode-nipql7u70-milen-s-projects.vercel.app/"
    },
    {
      title: "Modal Popup",
      description: "Display a certain modal on request",
      imgUrl: modal_popup,
      url: "https://modal-popup-kmvq2uiwr-milen-s-projects.vercel.app/"
    },
    {
      title: "Custom Scroll Indicator",
      description: "Displays how much of the page is being scrolled",
      imgUrl: custom_scroll,
      url: "https://scroll-indicator-bvvfzw13e-milen-s-projects.vercel.app/"
    },
    {
      title: "Scroll to section",
      description: "Scroll functionality to a particular page section",
      imgUrl: scroll_to_section,
      url: "https://scroll-to-a-particular-section-q834ff9if-milen-s-projects.vercel.app/"
    },
    {
      title: "Star rating",
      description: "Gives a star rating from 1 to 10",
      imgUrl: star_rating,
      url: "https://star-rating-4tsrekp4h-milen-s-projects.vercel.app/"
    },
    {
      title: "Tabs",
      description: "Displays different tabs with different content upon request",
      imgUrl: tabs,
      url: "https://tabs-3e64p5cy6-milen-s-projects.vercel.app/"
    },
    {
      title: "Onclick Outside",
      description: "A Custom hook is used to open / close a section within given borderlines",
      imgUrl: onclick_outside,
      url: "https://use-on-click-outside-custom-hook-ff1xp5ino-milen-s-projects.vercel.app/"
    },
    {
      title: "QR Code Generator",
      description: "Generates QR codes for different inputs",
      imgUrl: QRcode,
      url: "https://create-qr-code-646d30a3h-milen-s-projects.vercel.app/"
    },
    {
      title: "Random Color Generator",
      description: "Generates random colors and show their RGB & HEX info",
      imgUrl: random_color,
      url: "https://random-color-generator-mt5hs3kdp-milen-s-projects.vercel.app/"
    },
    {
      title: "Windows resize",
      description: "Dynamically resizing the text upon enlarging / shrinking the screen",
      imgUrl: windows_resize,
      url: "https://use-window-resize-cjdxs5w8k-milen-s-projects.vercel.app/"
    },
    {
      title: "Tic Tac Toe",
      description: "Popular game for children",
      imgUrl: tic_tac_toe,
      url: "https://tic-tac-lysn3qjjn-milen-s-projects.vercel.app/"
    },
    {
      title: "Tree View",
      description: "Displays a Tree structure of information",
      imgUrl: tree_view,
      url: "https://tree-view-7hf218rqo-milen-s-projects.vercel.app/"
    },
  ];
  
  const intermediateProjects = [
    {
      title: "Expense Tracker",
      description: "Calculates the income, expenses and keeps track of your current balance",
      imgUrl: expense_tracker,
      url: "https://expense-tracker-mafpm0s4f-milen-s-projects.vercel.app/"
    },
    {
      title: "Weather App",
      description: "Displays the weather info about a given city",
      imgUrl: weather_app,
      url: "https://weather-bk3lnndna-milen-s-projects.vercel.app/"
    },
  ];

  const advancedProjects = [
    {
      title: "ReactVenture",
      description: "Travel forum",
      imgUrl: project_2_img,
      url: ""
    },
    {
      title: "PlanPal",
      description: "Planning & Organizing Events Application",
      imgUrl: project_1_img,
      url: "https://reactprojecta58.github.io/PlanPal/"
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
            <p>Here you can check out most of what I've done so far</p>
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
                    {basicProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      );
                      // <button onClick={handleClick} style={{ cursor: "pointer"}}>Check it</button>
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="intermediate">
                <Row>
                    {intermediateProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="advanced">
                <Row>
                    {advancedProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
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
