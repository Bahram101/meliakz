import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import utik1 from "../../assets/images/utik_1.png";
import utik2 from "../../assets/images/utik_2.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../pages/Product/product.scss";

export const Iron = () => {
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
    <div className="product">
      <Container>
        <Row className="row1">
          <a href="/">
            <span>
              <FontAwesomeIcon icon={faChevronLeft} size="sm" /> Вернуться
            </span>
          </a>
        </Row>
        <Row className="row2">
          <Col md={6} className="sliderBlock">
            <div className="slider">
              <>
                <div className="navigation-wrapper">
                  <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                      <img src={utik1} alt="гладильная система" />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <img src={utik2} alt="гладильная система" />
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
          <Col md={6} className="feature">
            <h3>Основные характерстики</h3>
            <table className="border-collapse" border-spacing="1" width="100%">
              <tbody>
                <tr>
                  <td>Мощность парогенератора:</td>
                  <td className="text-right">1500 вт</td>
                </tr>
                <tr>
                  <td>Мощность утюга:</td>
                  <td className="text-right">700 вт</td>
                </tr>
                <tr>
                  <td>Материал подошвы утюга:</td>
                  <td className="text-right">нержавеющая сталь</td>
                </tr>
                <tr>
                  <td>Объем резервуара для воды:</td>
                  <td className="text-right">3л</td>
                </tr>
                <tr>
                  <td>Готовность к работе:</td>
                  <td className="text-right">240с</td>
                </tr>
                <tr>
                  <td>Скорость подачи пара:</td>
                  <td className="text-right">160 г/мин</td>
                </tr>
                <tr>
                  <td>Давление пара:</td>
                  <td className="text-right">6 Бар</td>
                </tr>
                <tr>
                  <td>Максимальная температура нагрева:</td>
                  <td className="text-right">185 град.</td>
                </tr>
                <tr>
                  <td>Размеры гладильной поверхности:</td>
                  <td className="text-right">130x40 см</td>
                </tr>
                <tr>
                  <td>Максимальная высота:</td>
                  <td className="text-right">100 см</td>
                </tr>
                <tr>
                  <td>Поддув:</td>
                  <td className="text-right">да</td>
                </tr>
                <tr>
                  <td>Тип управления:</td>
                  <td className="text-right">электронный</td>
                </tr>
              </tbody>
            </table>
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
