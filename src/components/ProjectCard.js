import { Col, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={12}>
      <div className="proj-card">
        <Row className="align-items-center">
          {/* Image Column */}
          <Col md={6} className="proj-imgbx">
            <img 
              src={imgUrl} 
              alt={title} 
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          
          {/* Content Column */}
          <Col md={6} className="proj-content">
            <div className="proj-txtx">
              <h4>{title}</h4>
              <p>{description}</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};