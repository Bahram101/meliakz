import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ofis from "../assets/images/ofis.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <div className="aboutUs">
      <Container>
        <Row className="row1">
          <a href="/">
            <span>
              <FontAwesomeIcon icon={faChevronLeft} size="sm" /> Вернуться
            </span>
          </a>
        </Row>
        <Row className="row2">
          <Col>
            <h2>О нашей компании</h2>
            <p>
              Компания занимается организацией международного маркетинга и О
              КОМПАНИИ продажей продукции «MELIA KAZAKHSTAN» Компания «MELIA
              KAZAKHSTAN» на постоянной основе занимается научными
              исследованиями и инновационными технологиями Компания «MELIA
              KAZAKHSTAN» имеет тысячи довольных клиентов по всему Казахстану
            </p>
          </Col>
        </Row>
      </Container>
      <div className="imgBlock">
        <img src={ofis} alt="" />
      </div>
    </div>
  );
};
