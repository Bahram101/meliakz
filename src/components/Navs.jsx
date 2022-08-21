import React from "react";
// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo3 from "../assets/images/logo3.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Navs = () => {
  return (
    <div className="navBar">
      <Container>
        <Link to="/">
          <div className="nav__logo">
            <img width="150" src={logo3} alt="Pizza logo" />
          </div>
        </Link>
        <div className="menu">
          <a href="/" className="menu-item d-none d-md-block">
            Главная
          </a>
          <a href="/comments" className="menu-item d-none d-md-block">
            Отзывы
          </a>
          <a href="about" className="menu-item d-none d-md-block">
            О нас
          </a>
          <a href="tel:+77076395949" className="menu-item d-none d-md-block">
            +7 (707) 639-59-49
          </a>
          <a
            href="https://www.instagram.com/melia_kazakhstan/?igshid=1jdbrwo3e49sd"
            target="_blank"
            className="menu-item"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://wa.me/77076395949"
            // href="https://web.whatsapp.com/send?phone=77071302100"
            target="_blank"
            className="menu-item"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand}>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton> </Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <ul>
                    <li>
                      <a href="/"> Главная</a>
                    </li>
                    <li>
                      <a href="/comments">Отзывы</a>
                    </li>
                    <li>
                      <a href="/about">О нас</a>
                    </li>
                  </ul>
                </Offcanvas.Title>
              </Navbar.Offcanvas>
            </Navbar>
          ))}
        </div>
      </Container>
    </div>
  );
};
