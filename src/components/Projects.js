import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import algomania from "../assets/img/algomania.png";
import realEstate from "../assets/img/realEstate.png";
import virtualLab from "../assets/img/virtualLab.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Algomania",
      description:
        "An interactive platform for algorithm practice and visualization.",
      imgUrl: algomania,
    },
    {
      title: "Real Estate Application",
      description:
        "A full-stack real estate app connecting buyers and sellers.",
      imgUrl: realEstate,
    },
    {
      title: "Virtual Lab",
      description:
        "A virtual platform for students to conduct simulated experiments.",
      imgUrl: virtualLab,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore a selection of my web development projects, each
                    demonstrating design, functionality, and user experience.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">WEB PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Carousel
                          interval={5000}
                          pause="hover"
                          controls={true}
                          indicators={true}
                        >
                          {projects.map((project, index) => (
                            <Carousel.Item key={index}>
                              <Row className="align-items-center">
                                <Col md={6}>
                                  <img
                                    src={project.imgUrl}
                                    alt={project.title}
                                    className="img-fluid"
                                  />
                                </Col>
                                <Col md={6}>
                                  <div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                  </div>
                                </Col>
                              </Row>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Design-related projects and concepts.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background Design"
      />
    </section>
  );
};
