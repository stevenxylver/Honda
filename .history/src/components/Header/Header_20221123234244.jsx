import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import honda from "../../assets/all-images/honda-1.webp";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Artikel",
  },
  
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
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
            </Col>

            <Col lg="5" md="3" sm="4">
              <div className="header__location d-flex align-items-center justify-content-end gap-2">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Tangerang</h4>
                  <h6>Cikupa, Jl. Raya Serang
                  </h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center justify-content-end gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            {/* <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-whatsapp-line"></i>0812-1222-3099
                </Link>
              </button>
            </Col> */}
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <button className="header__btn btn">
  <Link to="/contact">
    <i class="ri-whatsapp-line"></i>0812-1222-3099
  </Link>
</button>
            </div>
            
          </div>
        </Container>
      </div>
    </header>
  );
};


export default Header;
