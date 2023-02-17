import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import honda from "../../assets/all-images/honda.png";
import ins from "../../assets/all-images/ins.webp";
import wht from "../../assets/all-images/wht.webp";

const quickLinks = [
  {
    path: "/about",
    display: "About",
    
  },
  {
    path: "/cars",
    display: "Models Cars",
  },
  {
    path: "/blogs",
    display: "Artikel Terbaru",
  },

 
];


const Footer = () => {
  
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <img className="honda" src={honda} alt="" />
                    <i></i>
                    <span>HONDA
                     <br/> 
                    </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Honda Auto Tangerang - Melayani penjualan mobil secara Cash dan Credit untuk All-Type Mobil Honda. Harga yang tertera belum masuk promo diskon atau cashback yang tersedia, dan harga tersebut dapat berubah kapan saja.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <a href="https://www.google.com/maps?ll=-6.222955,106.528969&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=15133213297495267688" className="maps" target="_blank" rel="noreferrer">
              <p className="office__info">Jl. Raya Serang No.KM14, Dukuh, Kec. Cikupa, Tangerang, Banten 15710</p>
              </a>
              <p className="office__info">Phone: +62 812-1222-3099</p>

              <p className="office__info">Email: evas24453@gmail.com </p>
              <a href="https://www.google.com/maps?ll=-6.222955,106.528969&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=15133213297495267688" className="maps" target="_blank" rel="noreferrer">

              <p className="office__info">Office Time: 10am - 7pm</p>
              </a>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Follow Us</h5>
              <div className=" d-flex align-items-center gap-4 mt-3">
                  <div className="social__link-icon">
                  <a href="https://www.instagram.com/promohondatangerang_id/" className="maps" target="_blank" rel="noreferrer">

                  <img className="follow" src={ins} alt="" />
                  </a>                      
                  <a href="https://api.whatsapp.com/send?phone=6281212223099&text=Saya%20dari%20website%20Honda%20Auto%20Tangerang%20%0Anama%20%20%3A%0Atujuan%20%3A" className="maps" target="_blank" rel="noreferrer">
                  <img className="follow" src={wht} alt="" />
                  </a>
                </div>
                </div>
            </div>
          </Col>

          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
