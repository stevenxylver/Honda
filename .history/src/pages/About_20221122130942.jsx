import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import aboutImg from "../../assets/all-images/ava-3.jpg";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";


const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <section
      className="about__section"
      style={
        About === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="saru">
              <h4 className="section__subtitle">Halo</h4>
              <h2 className="section__title">Nama Saya Sarah</h2>
              <p className="section__description">
              Perkenalkan Saya Sarah, Sales Counter dari Dealer Honda Tangerang. Saat ini saya telah mengabdikan diri saya pada Honda Tangerang selama 9 Tahun. Dapat Saya pastikan Anda akan mendapatkan pelayanan terbaik dari kami baik saat transaksi maupun service after-sales. Anda dapat menghubungi saya melalui kontak yang tesedia pada website ini, untuk informasi lebih lanjut tentang pelayanan dari dealer kami.
              </p>

             
            </div>
          {/* </Col>
          <Col lg="3" md="6"> */}
          
          </Col>

          <Col md={{ offset: 3, size: 3
      }}>
            <div className="about__img">
              <img src={aboutImg} alt="" className="about"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Honda Auto Tangerang
                </h2>

                <p className="section__description">
                Honda Auto Tangerang - Melayani penjualan mobil secara Cash dan Credit untuk All-Type Mobil Honda. Harga yang tertera belum masuk promo diskon atau cashback yang tersedia, dan harga tersebut dapat berubah kapan saja.
                </p>

                <p className="section__description">
                Pembelian yang dilakukan secara Credit, Anda dapat memilih pembiayaan sendiri atau sesuai rekomendasi dari Sales Consultant Terbaik. Silahkan menghubungi Kontak Sales terbaik kami pada salah satu media komunikasi yang telah di sediakan di Website ini yakni melalui telepon, WhatsApp , email, ataupun kontak social media yang telah tertera.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+62 812-1222-3099</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default About;