import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import algomania from "../assets/img/algomania.png";
import realEstate from "../assets/img/realEstate.png";
import virtualLab from "../assets/img/virtualLab.png";
import design1 from "../assets/img/Frame 9.png";
import design2 from "../assets/img/food.png";
import design3 from "../assets/img/Home Page.png";
import design4 from "../assets/img/Home.png";
import design5 from "../assets/img/Frame 1 (2).png";
import design6 from "../assets/img/2.png";

export const Projects = () => {
  const webProjects = [
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

  const designProjects = [
    {
      title: "Design 1",
      description: "A creative UI/UX design for a mobile app.",
      imgUrl: design1,
    },
    {
      title: "Design 2",
      description: "Logo and branding design for a tech startup.",
      imgUrl: design2,
    },
    {
      title: "Design 3",
      description: "Web layout design with responsive elements.",
      imgUrl: design3,
    },
    {
      title: "Design 4",
      description: "A modern UI/UX design for a web application.",
      imgUrl: design4,
    },
    {
      title: "Design 5",
      description: "A creative UI/UX design for a mobile app.",
      imgUrl: design5,
    },
    {
      title: "Design 6",
      description: "Logo and branding design for a tech startup.",
      imgUrl: design6,
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
                        <Nav.Link eventKey="second">DESIGN</Nav.Link>
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
                          indicators={false}
                          className="custom-carousel"
                        >
                          {webProjects.map((project, index) => (
                            <Carousel.Item key={index}>
                              <Row
                                className="align-items-center"
                                style={{ minHeight: "300px" }}
                              >
                                <Col md={6}>
                                  <img
                                    src={project.imgUrl}
                                    alt={project.title}
                                    className="img-fluid project-img"
                                  />
                                </Col>
                                <Col md={1}>
                                  <div className="vertical-line"></div>
                                </Col>
                                <Col md={5}>
                                  <div className="project-content">
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
                        <Row>
                          {designProjects.map((project, index) => (
                            <Col md={4} key={index}>
                              <div className="design-card">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  className="design-img"
                                />
                                <div className="design-details">
                                  <h4>{project.title}</h4>
                                  <p>{project.description}</p>
                                  <a href="#">Figma</a>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
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
