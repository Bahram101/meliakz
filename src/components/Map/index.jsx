import React from "react";
import YandexMapConstructor from "react-yandex-maps-constructor";
import "./map.scss";
import { Container, Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Map = () => {
  return (
    <div className="section mapYandex" style={{ height: "100vh" }}>
      <div className="demo" style={{ height: "42vh" }}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h2>Заявка на бесплатную демонстрацию</h2>
              <div className="">
                <div className="demoContacts">
                  <a href="tel:+77076395949">
                    <FontAwesomeIcon icon={faPhone} />
                    <span style={{ marginLeft: "5px" }}>
                      +7 (707) 639-59-49
                    </span>
                  </a>
                </div>
                <div>
                  <a href="mailto:meliaalmaty@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span style={{ marginLeft: "5px" }}>
                      meliaalmaty@gmail.com
                    </span>
                  </a>
                </div>
                <div>г. Алматы мамыр 4 дом 5</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "58vh" }}>
        <YandexMapConstructor script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ace954db350c7437dcd3b618a7a08a0f14280493319468b0fbd296fa071b850fb&amp;width=100%&amp;height=100vh&amp;lang=ru_RU&amp;scroll=true"></script>' />
      </div>
    </div>
  );
};
