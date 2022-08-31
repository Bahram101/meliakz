import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import back1 from "../../assets/images/back1.png";
import { Link } from "react-router-dom";
import "./back.scss";
import { Animated } from "react-animated-css";

export const BackMassager = (props) => {
  const { state } = props;
  const sectionCount = state?.destination?.index;
  return (
    <section className="section iron" style={{ height: "100vh" }}>
      <Container>
        <Row>
          <Col className="iron__left" md={6}>
            <div className="innerCol">
              <h2 className="seatTitle">Melia Seat</h2>
              <p>
                Melia Seat вибрационная накладка на спинку стула делает массаж
                от области шеи и лопаток до зоны крест- ца, целенаправленно
                воздействует на мышцы позво- ночника, выполняет деликатный
                массаж Шиацу с раз- минанием.
              </p>
              <Link to="/product/3">
                <button>Подробнее</button>
              </Link>
            </div>
          </Col>
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            animationInDuration={1400}
            isVisible={sectionCount === 3 ? true : ""}
          >
            <Col className="iron__right">
              <img src={back1} alt="утюг" />
            </Col>
          </Animated>
          <div className="btnCol">
            <Link to="/product/3">
              <button>Подробнее</button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};
