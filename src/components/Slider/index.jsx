import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./slider.scss";
import client01 from "../../assets/images/client_01.jpeg";
import client02 from "../../assets/images/client_02.jpeg";
import client03 from "../../assets/images/client_03.jpg";
import client04 from "../../assets/images/client_04.jpg";
import client05 from "../../assets/images/client_05.jpg";
import client06 from "../../assets/images/client_06.jpg";
import client07 from "../../assets/images/client_07.jpg";
import client08 from "../../assets/images/client_08.jpg";
import client09 from "../../assets/images/client_09.jpg";
import client10 from "../../assets/images/client_10.jpg";
import client11 from "../../assets/images/client_11.jpg";
import client12 from "../../assets/images/client_12.jpg";
import client13 from "../../assets/images/client_13.jpg";
import client14 from "../../assets/images/client_14.jpg";
import client15 from "../../assets/images/client_15.jpg";
import client16 from "../../assets/images/client_16.jpg";
import client17 from "../../assets/images/client_17.jpg";
import client18 from "../../assets/images/client_18.jpg";
import client19 from "../../assets/images/client_19.jpg";
import client20 from "../../assets/images/client_20.jpg";
import client21 from "../../assets/images/client_21.jpg";
import client22 from "../../assets/images/client_22.jpg";
import client23 from "../../assets/images/client_23.jpg";
import client24 from "../../assets/images/client_24.jpg";
import client25 from "../../assets/images/client_25.jpg";
import client26 from "../../assets/images/client_26.jpg";
import client27 from "../../assets/images/client_27.jpg";
import client28 from "../../assets/images/client_28.jpg";
import client29 from "../../assets/images/client_29.jpg";
import client30 from "../../assets/images/client_30.jpg";
import client31 from "../../assets/images/client_31.jpg";
import client32 from "../../assets/images/client_32.jpg";
import client33 from "../../assets/images/client_33.jpg";
import client34 from "../../assets/images/client_34.jpg";
import client35 from "../../assets/images/client_35.jpg";
import client36 from "../../assets/images/client_36.jpg";
import client37 from "../../assets/images/client_37.jpg";
import client38 from "../../assets/images/client_38.jpg";
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
import img15 from "../../assets/images/15.jpg";
import img16 from "../../assets/images/16.jpg";
import img17 from "../../assets/images/17.jpg";
import img18 from "../../assets/images/18.jpg";
import img19 from "../../assets/images/19.jpg";
import img20 from "../../assets/images/20.jpg";
import img21 from "../../assets/images/21.jpg";
import img22 from "../../assets/images/22.jpg";
import img23 from "../../assets/images/23.jpg";
import img24 from "../../assets/images/24.jpg";
import img25 from "../../assets/images/25.jpg";
import img26 from "../../assets/images/26.jpg";
import img27 from "../../assets/images/27.jpg";

export const Slider = () => {
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

  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [loaded2, setLoaded2] = useState(false);
  const [sliderRef2, instanceRef2] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide2(slider.track.details.rel);
    },
    created() {
      setLoaded2(true);
    },
  });
  return (
    <div className="section collectSlider" style={{ height: "100vh" }}>
      <Container>
        <Row className="row2">
          <Col lg={6}>
            <div className="innerCol">
              <h2>Наши счастливые клиенты</h2>
              <div className="slider">
                <>
                  <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide18">
                        <img src={client19} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client20} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client21} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client22} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client23} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client24} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client25} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client26} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client27} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client28} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client29} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client30} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client31} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client32} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client33} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client34} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client35} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client36} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client37} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client38} />
                      </div>
                      <div className="keen-slider__slide number-slide1">
                        <img src={client01} />
                      </div>
                      <div className="keen-slider__slide number-slide2">
                        <img src={client02} />
                      </div>
                      <div className="keen-slider__slide number-slide3">
                        <img src={client03} />
                      </div>
                      <div className="keen-slider__slide number-slide4">
                        <img src={client04} />
                      </div>
                      <div className="keen-slider__slide number-slide5">
                        <img src={client05} />
                      </div>
                      <div className="keen-slider__slide number-slide6">
                        <img src={client06} />
                      </div>
                      <div className="keen-slider__slide number-slide7">
                        <img src={client07} />
                      </div>
                      <div className="keen-slider__slide number-slide8">
                        <img src={client08} />
                      </div>
                      <div className="keen-slider__slide number-slide9">
                        <img src={client09} />
                      </div>
                      <div className="keen-slider__slide number-slide10">
                        <img src={client10} />
                      </div>
                      <div className="keen-slider__slide number-slide11">
                        <img src={client11} />
                      </div>
                      <div className="keen-slider__slide number-slide12">
                        <img src={client12} />
                      </div>
                      <div className="keen-slider__slide number-slide13">
                        <img src={client13} />
                      </div>
                      <div className="keen-slider__slide number-slide14">
                        <img src={client14} />
                      </div>
                      <div className="keen-slider__slide number-slide15">
                        <img src={client15} />
                      </div>
                      <div className="keen-slider__slide number-slide16">
                        <img src={client16} />
                      </div>
                      <div className="keen-slider__slide number-slide17">
                        <img src={client17} />
                      </div>
                      <div className="keen-slider__slide number-slide18">
                        <img src={client18} />
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
                          // return (
                          // <button
                          //   key={idx}
                          //   onClick={() => {
                          //     instanceRef.current?.moveToIdx(idx);
                          //   }}
                          //   className={
                          //     "dot" + (currentSlide === idx ? " active" : "")
                          //   }
                          // ></button>
                          // );
                      })}
                    </div>
                  )}
                </>
              </div>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <h2>Наша команда</h2>
            <div className="slider2">
              <>
                <div className="navigation-wrapper">
                  <div ref={sliderRef2} className="keen-slider">
                  <div className="keen-slider__slide number-slide6">
                      <img src={img15} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img16} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img17} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img18} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img19} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img20} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img21} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img22} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img23} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img24} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img25} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img26} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img27} />
                    </div>
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
                    <div className="keen-slider__slide number-slide6">
                      <img src={img07} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img08} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img09} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img10} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img11} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img12} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img13} />
                    </div>
                    <div className="keen-slider__slide number-slide6">
                      <img src={img14} />
                    </div>
                    
                  </div>
                  {loaded && instanceRef.current && (
                    <>
                      <Arrow
                        left
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef2.current?.prev()
                        }
                        disabled={currentSlide2 === 0}
                      />

                      <Arrow
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef2.current?.next()
                        }
                        disabled={
                          currentSlide2 ===
                          instanceRef2.current.track.details.slides.length - 1
                        }
                      />
                    </>
                  )}
                </div>
                {loaded2 && instanceRef2.current && (
                  <div className="dots">
                    {[
                      ...Array(
                        instanceRef2.current.track.details.slides.length
                      ).keys(),
                    ].map((idx) => {
                      // return (
                      //   <button
                      //     key={idx}
                      //     onClick={() => {
                      //       instanceRef2.current?.moveToIdx(idx);
                      //     }}
                      //     className={
                      //       "dot" + (currentSlide2 === idx ? " active" : "")
                      //     }
                      //   ></button>
                      // );
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
