import React from "react";
import "./map.scss";
import { Container, Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const YandexMap = () => {
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
      <YMaps>
        <div>
          My awesome application with maps!
          <Map defaultState={{ center: [43.215065, 76.840982], zoom: 6 }} >
            <Placemark geometry={[43.215065, 76.840982]}/>  
          </Map>
        </div>
      </YMaps>
    </div>
  );
};
