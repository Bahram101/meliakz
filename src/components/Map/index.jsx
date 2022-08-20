import React from "react";
import YandexMapConstructor from "react-yandex-maps-constructor";
import "./map.scss";
import { Container, Row, Col } from "react-bootstrap";
import Mailer from "../Mailer";

export const Map = () => {
  return (
    <div className="section mapYandex" style={{ height: "100vh" }}>
      <div className="demo" style={{ height: "40vh" }}>
        <Container>
          <Row>
            <h2>Заявка на бесплатную демонстрацию</h2>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Mailer />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "60vh" }}>
        <YandexMapConstructor script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ace954db350c7437dcd3b618a7a08a0f14280493319468b0fbd296fa071b850fb&amp;width=100%&amp;height=100vh&amp;lang=ru_RU&amp;scroll=true"></script>' />
      </div>
    </div>
  );
};
