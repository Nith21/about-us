import React from "react";
import Image1 from "./images/Image-1.png";
import Image2 from "./images/Image-2.png";
import Image3 from "./images/Image-3.png";
import SectionHeading from "./images/section-heading.webp";
import InstitutionLogo from "./images/institutions-abt.webp";
import UsersLogo from "./images/users-abt.webp";
import Image7 from "./images/timeline-1.webp";
import Image8 from "./images/Image-4.png";
import Image9 from "./images/cloud-storage.svg";
import ExperienceLogo from "./images/experience-abt.webp";
import TeamLogo from "./images/team-abt.webp";
import Image12 from "./images/timeline-2.webp";
import Image13 from "./images/timeline-3.webp";
import Image14 from "./images/timeline-4.webp";
import SearchEngine from "./images/search-engine.svg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      {/*---------------------------Header Company Name Start----------------------- */}
      <Container fluid>
        <Row>
          <Col>
            <div className="">
              <h3 className="text-center about-edu-dict"> Edu-Dict </h3>
              <p className="text-center company-name-about-us">
                {" "}
                Edu-Dict Technologies Pvt. Ltd{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/*---------------------------Header Company Name Start----------------------- */}

      {/*---------------------------Header Picture Animation Start------------------------ */}
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="position-relative banner-section">
              <img src={Image1} alt="Error-Image" className="aboutus-image-1" />
              <img
                src={Image2}
                alt="Error-Image"
                className="aboutus-image-2 position-absolute"
              />
              <img
                src={Image3}
                alt="Error-Image"
                className="aboutus-image-3 position-absolute"
              />
              <img src={SearchEngine} alt="Search-Engine" className="alter-banner-image" />
            </div>
          </Col>
        </Row>
      </Container> 
      {/*---------------------------Header Picture Animation End------------------------*}

      {/*----------------------About Edu-Dict Start------------------------- */}
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-5">
              <h3 className="text-center company-name"> About Edu-Dict </h3>
              <div className="d-flex justify-content-center">
                <img src={SectionHeading} alt="Section-Heading" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container-fluid">
        <div className="row">
          <div className="col summary-column">
            <p className="summary">
              {" "}
              MasterSoft ERP Solution is the most trusted e-governance ERP
              provider based in India.{" "}
            </p>
            <p className="summary">
              {" "}
              A close experience with prestigious educational institutes
              including autonomous and MHRD governed and funded <br />{" "}
              Institutions such as NITs, IIIT, central universities, has helped
              our team members understand the educational <br /> framework and
              integrate best practices into our campus management solutions.{" "}
            </p>

            <p className="summary">
              Built on the foundational principles of Innovation, Compliance,
              Data Security, and Transparency, our ERP products are <br /> time
              tested and proven to streamline institutional work processes &
              save time to improve efficiency of Campus.
            </p>

            <div className="Logo">
            <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={InstitutionLogo} alt="Institution-Logo" className="bg-dark"  />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 100+ </strong>
                  <p className="Institution-Logo-Text" > Institutions  </p>
                </div>
              </div>

              <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={UsersLogo} alt="User-Logo" className="bg-dark"  />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 10+ </strong>
                  <p className="Institution-Logo-Text" > Thousand Users  </p>
                </div>
              </div>

              <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={ExperienceLogo} alt="Experience-Logo" className="bg-dark"  />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 10+ </strong>
                  <p className="Institution-Logo-Text" > Thousand Users  </p>
                </div>
              </div>
            </div>

            
          </div>
          <div className="col image8-column">
            <img src={Image8} alt="Error-Image" className="image-8" />
          </div>
        </div>
      </div>
      {/*----------------------About Edu-Dict End------------------------- */}

      {/*------------------------About Our Value Start------------------ */}
      <div className="container-fluid mt-5 about-our-value-container">
        <div className="row">
          <div className="col-12">
            <div className="">
              <p className="text-center management-heading"> Our Values </p>
            </div>
            <div className="d-flex justify-content-center">
              <img src={SectionHeading} alt="Section-Heading" />
            </div>
          </div>
        </div>
        <div className="row about-our-values-content">
          <div className="col-12">
            <div className="d-flex justify-content-center our-values">
              <div className="ms-5 about-our-values-picture-section">
                <img
                  src={Image9}
                  alt="Error-Image"
                  className="about-our-values-picture"
                />
              </div>

              <div className="about-our-values-summary ms-5 d-flex flex-column mt-5">
                <p>
                  {" "}
                  Integrity, innovation, and customer-centricity are the core
                  values that drive us. We are dedicated to maintaining <br />{" "}
                  the highest ethical standards in everything we do. Our
                  commitment to innovation pushes us to continually <br />{" "}
                  explore new technologies and ideas. Most importantly, we put
                  our customers at the center of our business, <br /> striving
                  to exceed their expectations at every turn.{" "}
                </p>

                <p>
                  {" "}
                  At Edu-Dict, our values are the guiding principles that define
                  who we are, how we operate, and what we stand for. <br /> They
                  shape our culture, inform our decisions, and drive us towards
                  our mission of creating innovative software solutions <br />{" "}
                  that make a difference.{" "}
                </p>

                <p>
                  {" "}
                  Our customers are at the heart of our business. We listen
                  attentively to their needs and strive to exceed their
                  expectations. <br /> Our commitment to customer-centricity
                  means we are dedicated to providing the best possible
                  experience to those who <br />
                  trust us with their software needs.{" "}
                </p>
                <p>
                  {" "}
                  We have a passion for innovation. We continuously seek out new
                  ideas and technologies to push the boundaries of <br /> what's
                  possible. Innovation drives us to stay ahead in a rapidly
                  changing industry and deliver cutting-edge solutions <br /> to
                  our clients.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------About Company journey Start------------------ */}
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12">
              <p className="company-journey-heading text-center"> Journey </p>
              <div className="company-journey d-flex justify-content-center">
                <img src={SectionHeading} alt="Section-Heading" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-5 timeline">
              <div className="timeline-grid ">
                <div className="timeline-icon">
                  <img src={Image7} alt="Error-Image" className="bg-dark" />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 2020 </strong>
                  <p>
                    {" "}
                    MasterSoft's journey began in 1995. Back then, founder of
                    MasterSoft, Mr. Sham Somani was working as academician at
                    Nagpur University.{" "}
                  </p>
                </div>
              </div>

              <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={Image12} alt="Error-Image" className="bg-dark" />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 2021 </strong>
                  <p>
                    {" "}
                    MasterSoft's journey began in 1995. Back then, founder of
                    MasterSoft, Mr. Sham Somani was working as academician at
                    Nagpur University.{" "}
                  </p>
                </div>
              </div>

              <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={Image13} alt="Error-Image" className="bg-dark" />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 2022 </strong>
                  <p>
                    {" "}
                    MasterSoft's journey began in 1995. Back then, founder of
                    MasterSoft, Mr. Sham Somani was working as academician at
                    Nagpur University.{" "}
                  </p>
                </div>
              </div>

              <div className="timeline-grid ms-3 ">
                <div className="timeline-icon">
                  <img src={Image14} alt="Error-Image" className="bg-dark" />
                </div>
                <hr />
                <div className="timeline-desc mt-3">
                  <strong> 2023 </strong>
                  <p>
                    {" "}
                    MasterSoft's journey began in 1995. Back then, founder of
                    MasterSoft, Mr. Sham Somani was working as academician at
                    Nagpur University.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------About Our Values End------------------ */}
    </>
  );
};

export default About;
