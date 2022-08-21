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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              eveniet adipisci. Esse porro delectus provident ex doloribus
              repellat ad illum adipisci. Porro animi placeat incidunt totam,
              earum quasi voluptates molestias?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, totam deserunt dolorem
              iure eveniet facere et repudiandae numquam, consequuntur deleniti
              iste dignissimos quibusdam veniam maiores quaerat consequatur
              praesentium quas aliquid.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              eveniet adipisci. Esse porro delectus provident ex doloribus
              repellat ad illum adipisci. Porro animi placeat incidunt totam,
              earum quasi voluptates molestias?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, totam deserunt dolorem
              iure eveniet facere et repudiandae numquam, consequuntur deleniti
              iste dignissimos quibusdam veniam maiores quaerat consequatur
              praesentium quas aliquid.
            </p>
            <div className="imgBlock">
              <img src={ofis} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
