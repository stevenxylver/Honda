import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import Example from "../components/UI/Example";

import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import steer from "../assets/all-images/steering-2-line.png"
import consul from "../assets/all-images/message-2-line.png"
import gift from "../assets/all-images/gift-2-fill.png"
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container className="contain">
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left"><h1>
                <img className="steer" src={steer} alt="" /></h1>
                  <h2>Test Drive Now</h2>
                  <h1>Rasakan sensasi berkendara dengan mobil impian Anda sekarang! Hubungi kami untuk melakukan pendaftaran test drive, dan kami akan siapkan unitnya.</h1>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="find__cars-left">
                <h1>
                <img className="steer" src={gift} alt="" /></h1>
                  <h2>Newest Promo</h2>
                  <h1>Kami selalu memiliki penawaran terbaik untuk Anda para calon pembeli. Anda bisa mendapatkan berbagai macam promo dan diskon menarik setiap bulannya.</h1>
                </div>
              </Col>

              <Col lg="4" md="4">
                <div className="find__cars-left">
                <h1>
                <img className="steer" src={consul} alt="" /></h1>
                  <h2>Consultation</h2>
                  <h1>Masih ragu untuk melakukan transaksi dengan kami? atau Anda butuh informasi lebih banyak mengenai unit Honda? Jangan ragu untuk menghubungi kami.</h1>
                </div>
              </Col>
              
              {/* <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col> */}
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">News & Promo</h2>
            </Col>
            <Example />
   
          </Row>
        </Container>
      </section> */}
      {/* =========== car offer section ============= */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Events</h6>
              <h2 className="section__title">Get Promo</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">GALERY</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Temukan Info Menarik</h6>
              <h2 className="section__title">Artikel Honda Terbaru</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;


// <ServicesList /> in 72