import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/ava-3.jpg";
import { Link } from "react-router-dom";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Halo</h4>
              <h2 className="section__title">Nama Saya Sarah</h2>
              <p className="section__description">
              Perkenalkan Saya Sarah, Sales Counter dari Dealer Honda Tangerang. Saat ini saya telah mengabdikan diri saya pada Honda Tangerang selama 9 Tahun. Dapat Saya pastikan Anda akan mendapatkan pelayanan terbaik dari kami baik saat transaksi maupun service after-sales. Anda dapat menghubungi saya melalui kontak yang tesedia pada website ini, untuk informasi lebih lanjut tentang pelayanan dari dealer kami.
              </p>

             
            </div>
          {/* </Col>
          <Col lg="3" md="6"> */}
          
          </Col>

          <Col md={{ offset: 3, size: 3}}>
            <div className="about__img">
              <img src={aboutImg} alt="" className="about"/>
              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
