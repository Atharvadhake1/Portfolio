import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import algomania from "../assets/img/algomania.png";
import realEstate from "../assets/img/realEstate.png";
import virtualLab from "../assets/img/virtualLab.png";
import design1 from "../assets/img/Frame 9.png"; // Example design images
import design2 from "../assets/img/Frame 1.png";
import design3 from "../assets/img/Home Page.png";
import design4 from "../assets/img/Home.png";
import design5 from "../assets/img/Frame 1 (2).png";
import design6 from "../assets/img/2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

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
    }
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
                      {/* WEB PROJECTS */}
                      <Tab.Pane eventKey="first">
                        <Carousel
                          interval={5000}
                          pause="hover"
                          controls={true}
                          indicators={true}
                        >
                          {webProjects.map((project, index) => (
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
                                    <h1>{project.title}</h1>
                                    <p>{project.description}</p>
                                  </div>
                                </Col>
                              </Row>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Tab.Pane>

                      {/* DESIGN */}
                      {/* DESIGN */} 
<Tab.Pane eventKey="second">
  <div className="design-section">
    <Row className="flex-column align-items-center g-4">
      {designProjects.map((project, index) => (
        <Col key={index} className="d-flex justify-content-center">
          <div className="design-card">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="design-img"
            />
            <div className="project-details">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
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
