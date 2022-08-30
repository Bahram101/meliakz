import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./slider2.scss";
import img01 from "../../assets/images/01.jpeg";
import img02 from "../../assets/images/02.jpeg";
import img03 from "../../assets/images/03.jpeg";
import img04 from "../../assets/images/04.jpeg";
import img05 from "../../assets/images/05.jpeg";
import img06 from "../../assets/images/06.jpeg";
import img07 from "../../assets/images/07.jpeg";
import img08 from "../../assets/images/08.jpeg";
import img09 from "../../assets/images/09.jpeg";
import img10 from "../../assets/images/10.jpeg";
import img11 from "../../assets/images/11.jpeg";
import img12 from "../../assets/images/12.jpeg";
import img13 from "../../assets/images/13.jpeg";
import img14 from "../../assets/images/14.jpeg";

export const Slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div
      className="section collectSlider2 d-block d-lg-none"
      style={{ height: "100vh" }}
    >
      <Container>
        <Row className="row2">
          <Col className="">
            <h2>Наша команда</h2>
            <div className="slider">
              <>
                <div className="navigation-wrapper">
                  <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide4">
                      <img src={img04} />
                    </div>
                    <div className="keen-slider__slide number-slide1">
                      <img src={img01} />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <img src={img02} />
                    </div>
                    <div className="keen-slider__slide number-slide3">
                      <img src={img03} />
                    </div>
                    <div className="keen-slider__slide number-slide5">
                      <img src={img05} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img06} />
                    </div>
					<div className="keen-slider__slide number-slide7">
                      <img src={img07} />
                    </div>
					<div className="keen-slider__slide number-slide8">
                      <img src={img08} />
                    </div>
					<div className="keen-slider__slide number-slide9">
                      <img src={img09} />
                    </div>
					<div className="keen-slider__slide number-slide10">
                      <img src={img10} />
                    </div>
					<div className="keen-slider__slide number-slide11">
                      <img src={img11} />
                    </div>
					<div className="keen-slider__slide number-slide12">
                      <img src={img12} />
                    </div>
					<div className="keen-slider__slide number-slide13">
                      <img src={img13} />
                    </div>
					<div className="keen-slider__slide number-slide14">
                      <img src={img14} />
                    </div>
                  </div>
                  {loaded && instanceRef.current && (
                    <>
                      <Arrow
                        left
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                      />

                      <Arrow
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                          currentSlide ===
                          instanceRef.current.track.details.slides.length - 1
                        }
                      />
                    </>
                  )}
                </div>
                {loaded && instanceRef.current && (
                  <div className="dots">
                    {[
                      ...Array(
                        instanceRef.current.track.details.slides.length
                      ).keys(),
                    ].map((idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            instanceRef.current?.moveToIdx(idx);
                          }}
                          className={
                            "dot" + (currentSlide === idx ? " active" : "")
                          }
                        ></button>
                      );
                    })}
                  </div>
                )}
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
