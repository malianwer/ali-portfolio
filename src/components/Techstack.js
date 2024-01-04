import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiVisualstudio, SiXcode } from "react-icons/si";
import { DiJavascript1, DiReact } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGithubFilled />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
    </Row>
  );
}

export default Techstack;
