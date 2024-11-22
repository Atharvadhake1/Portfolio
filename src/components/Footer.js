import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/leetcode.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center-nav">
          {/* Left Column - Text */}
          <Col sm={4} className="text-start">
            <p>
              Loosely designed in <strong>Figma</strong> and coded in <strong>Visual Studio Code</strong> by yours truly.
              Built with <strong>ReactJS</strong>, deployed with <strong>Vercel</strong>.
              All text is set in the <strong>Inter</strong> typeface.
            </p>
          </Col>

          {/* Center Column - Social Links */}
          <Col sm={4} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atharva-dhake-155160258/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Atharvadhake1"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://leetcode.com/u/atharva_dhake_/"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://www.instagram.com/atharva_dhake_/"><img src={navIcon3} alt="Icon" /></a>

            </div>
          </Col>

          {/* Right Column - Copyright */}
          <Col sm={4} className="text-end">
            <p>© 2024 Atharva Dhake. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
