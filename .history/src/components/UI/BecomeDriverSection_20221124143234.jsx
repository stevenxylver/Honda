import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

// import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" className="become__driver-img">
          <iframe className="yutub" width="100%" height="130%"  src="https://www.youtube.com/embed/w7pgDpsCZ2E" frameborder="0"  title="YouTube video player" allowfullscreen="true"></iframe>
          </Col>
          

          <Col lg="6" md="6" sm="12" className="hubungi">
            <h2 className="section__title become__driver-title">
              Dapat kan Promo & Info yang Menarik .
            </h2>
            <a href="https://api.whatsapp.com/send?phone=6281212223099&text=Saya%20dari%20website%20Honda%20Auto%20Tangerang%20%0Anama%20%20%3A%0Atujuan%20%3A" target="_blank" rel="noreferrer">
            <button className="btn become__driver-btn mt-4">
              Hubungi Saya
            </button>
            </a>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
