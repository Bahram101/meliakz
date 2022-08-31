import React, { useState, useRef } from "react";
import utik1 from "../../assets/images/utik_1.png";
import "./iron.scss";
import "keen-slider/keen-slider.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

export const Iron = (props) => {
  const { state } = props;
  const sectionCount = state?.destination?.index;
  return (
    <>
      <section className="section iron" style={{ height: "100vh" }}>
        <Container className="ironContainer">
          <Row>
            <Col className="iron__left">
              <div className="innerCol">
                <h2>
                  Гладильная система <br />
                  Melia Black Edition
                </h2>
                <p>
                  Это три прибора в одном: утюг, отпариватель для одежды и
                  гладильная доска. Гладильная доска с функциями поддува и
                  отвода пара, сенсорное управление, давление пара – 6 Бар,
                  классический дизайн и оптимальная конструкция (в форме
                  передвижного столика на колесиках) – все это гарантирует
                  профессиональный результат глажения с минимальными усилиями.
                </p>
                <Link to="/product/1">
                  <button>Подробнее</button>
                </Link>
              </div>
            </Col>

            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              animationInDuration={1400}
              isVisible={sectionCount === 1 ? true : ""}
            >
              <Col className="iron__right" >
                <img src={utik1} alt="утюг" />
              </Col>
            </Animated>
            <div className="btnCol">
              <Link to="/product/1">
                <button>Подробнее</button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
