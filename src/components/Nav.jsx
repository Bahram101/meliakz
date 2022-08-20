import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo3 from "../assets/images/logo3.png";

export const Nav = () => {
  return (
    <nav>
      <Container>
        <Link to="/">
          <div className="nav__logo">
            <img width="150" src={logo3} alt="Pizza logo" />
          </div>
        </Link>
        <div className="menu">
          <a href="tel:+77012724040" className="menu-item tel">
            +7 (701) 272 40 40
          </a>
          <a
            href="https://www.instagram.com/melia_kazakhstan/?igshid=1jdbrwo3e49sd"
            target="_blank"
            className="menu-item"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=77071302100"
            target="_blank"
            className="menu-item"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>
      </Container>
    </nav>
  );
};
