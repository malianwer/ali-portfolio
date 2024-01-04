import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import homeLogo from "../../assets/images/mainPicture.png";
import Particle from "../../components/Particle";
import myImg from "../../assets/images/meImg.png";
import Techstack from "../../components/Techstack";
import Type from "../../components/Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUHAMMAD ALI </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="blue"> INTRODUCE </span> MYSELF
              </h1>

              <p className="home-about-body">
                Hi Everyone, I am <span className="blue">Muhammad Ali </span>
                from <span className="blue"> Lahore, Pakistan.</span>
                <br />
                <br />
                I am a React JS and React Native Developer, bringing a wealth of
                experience in the dynamic realm of computer software.
                <br />
                <br />
                Specializing in crafting engaging user experiences, my expertise
                extends across React JS and React Native technologies
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <h1
            className="project-heading"
            style={{ color: "white", marginTop: 40, marginBottom: 20 }}
          >
            Professional <strong className="blue">Skills</strong>
          </h1>

          <Techstack />
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="blue">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/malianwer/"
                    target="_blank"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ali-anwer-ba7122218/"
                    target="_blank"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
