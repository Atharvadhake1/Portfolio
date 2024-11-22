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
        "An inter-department coding competition platform enabling participant registration, real-time progress tracking, and team comparisons. Designed the UI in Figma and implemented dynamic content for a seamless user experience.",
      imgUrl: algomania,
      techStack: [
        {
          name: "Next.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "PostgreSQL",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Django",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
      ],
      githubLink: "https://github.com/tanishkhot/Algomania-frontend",
    },


    {
      title: "DMSL Virtual Lab                      ",
      description:
        "A virtual DBMS lab providing assignments, videos, MCQs, and an online SQL editor for query practice. Improved hands-on learning by 50% and is set to feature on PICT’s official website.",
      imgUrl: virtualLab,
      techStack: [
        {
          name: "ReactJS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "CSS",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
      githubLink: "https://github.com/Sakshig711/Virtual-lab",
    },


    {
      title: "Real Estate Web Application",
      description:
        "A full-stack platform for real estate with real-time chat, secure JWT-based authentication, and seamless routing with dynamic state management.",
      imgUrl: realEstate,
      techStack: [
        {
          name: "React",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Socket.io",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
        {
          name: "Prisma",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
      ],
      githubLink: "https://github.com/rucharajmane/real-estate",
    },
  ];
  

  const designProjects = [
    {
      title: "PIJET Website Design",
      imgUrl: design1,
      figmaLink: "https://www.figma.com/design/B07eyOKKNUonQTqSjHVYZH/PIJET-(Copy)?node-id=0-1&t=drbfTAG904Zk5UdN-1",
    },
    {
      title: "Food Ordering App",
      imgUrl: design2,
      figmaLink: "https://www.figma.com/proto/FC2Oia1Y1pfOGGdd7vPhdz/Food-Ordering-App?node-id=111-42&node-type=canvas&t=I9o6sACMaBIEpVD3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Medical Mobile App",
      imgUrl: design6,
      figmaLink: "https://www.figma.com/proto/L6ez27ugs7BQMyDqyiXEpX/MEDICAL-MOBILE-APP?node-id=1-727&node-type=canvas&t=WzD59NVx5Ct0qRb5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "NGO Website",
      imgUrl: design3,
      figmaLink: "https://www.figma.com/proto/FyFw4ygX2EMdOAuFR4XCs6/NGO-website?node-id=4-16&node-type=canvas&t=ZPg5yKAn0hre99TB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Portfolio Mockup",
      imgUrl: design4,
      figmaLink: "https://www.figma.com/proto/n1jlFWaW6C8R7oYwv5wIAu/Portfolio-design?t=gzhbBWh5MC7197RU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
    },
    {
      title: "Website Design for a Company",
      imgUrl: design5,
      figmaLink: "https://www.figma.com/proto/zpzssInofaCSw5c0ZAp0ww/Design-Assignment?node-id=26-76&t=xQWLWBF2c6ZV8xsS-1",
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
                  <h2>PROJECTS</h2>
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
                        <Nav.Link eventKey="second">DESIGNS</Nav.Link>
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
                            <Row className="row-container align-items-center" style={{ minHeight: "300px" }}>
                              <Col md={6}>
                                <img src={project.imgUrl} 
                                alt={project.title} 
                                className="img-fluid project-img" />
                              </Col>
                            
                              <Col md={5}>
                              <div className="project-content">
                                <h3>{project.title}</h3>
                                <hr className="divider-line" /> {/* Horizontal line */}
                                <div className="text-container">
                                  <p>{project.description}</p>
                                </div>
                                {/* Tech stack icons */}
                                <div className="tech-stack-icons">
                                  {project.techStack.map((tech, techIndex) => (
                                    <img
                                      key={techIndex}
                                      src={tech.iconUrl}
                                      alt={tech.name}
                                      title={tech.name}
                                      className="tech-icon"
                                    />
                                  ))}
                                </div>
                                
                                {/* GitHub Link */}
                                <div className="github-link">
                                  <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View on GitHub
                                  </a>
                               </div>
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
                                  <h2>{project.title}</h2>
                                  {/* Render the Figma link */}
                                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                                  View on Figma
                                  </a>
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
