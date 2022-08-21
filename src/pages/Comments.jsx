import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../pages/Product/product.scss";
import user1 from "../assets/images/user.png";

export const Comments = () => {
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
    <div className="comments">
      <Container>
        <Row className="row1">
          <a href="/">
            <span>
              <FontAwesomeIcon icon={faChevronLeft} size="sm" /> Вернуться
            </span>
          </a>
        </Row>
        <Row className="row2">
          <h3>Отзывы клиентов</h3>
          <Col md={{ span: 8, offset: 2 }} className="sliderBlock">
            <div className="slider">
              <>
                <div className="navigation-wrapper">
                  <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Добрый день. Заказал у Вас гладильную систему Melia.
                        Проживаю я в городе Каскелен и это не помешало отправить
                        товар в такие короткие сроки. Особенно мне понравилось
                        как он был упакован. Сама система нам очень понравилась,
                        просто класс, таким мы ещё не пользовались. Это говорит
                        о качестве товара и обслуживании клиентов Вашей
                        компанией (реклама полностью соответствует покупаемому
                        товару). За подарок отдельное спасибо! Буду
                        рекомендовать своим друзьям. Удачи вам в ваших делах!
                      </p>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Обратилась в компанию Melia Kazakhstan за покупкой
                        гладильного системы. Очень довольна работой и
                        консультацией менеджера Ернара!
                        Вежливый,внимательный,терпеливый и квалифицированный
                        специалист. Всё объяснил, посоветовал, успокоил! Так как
                        я очень беспокоилась, чтопокупку будут транспортировать
                        в Шымкент. С нетерпением ждала, звонила и писала Ернару,
                        на что он всегда давал понятные разъяснения! Сегодня
                        получила свою покупку! Большое Спасибо
                      </p>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Хочу выразить благодарность консультанту Асхата за
                        подробную характеристику интересующих меня гладильных
                        систем
                      </p>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Вот купила гладильную систему Melia и решила написать
                        отзыв.Во-первых огромное СПАСИБО менеджеру Акежану,очень
                        доброжелательный, грамотный,по телефону мне все объяснил
                        и сделал скидочку,за что огромная благодарность.
                        Настолько понравилось отношение ко мне как к
                        покупателю,своими знаниями и терпеливостью,что очень
                        хочется,чтоб руководство поощрило Акежана и вынесло ему
                        благодарность от благодарных покупателей. Теперь о
                        товаре. Система мне понравилась,отдув,надув,вертикальное
                        отпаривание-суперрр!!! Правда пока еще учусь,чтоб ничего
                        не забыть включить. Купила 27.09.19г. Всем огромное
                        СПАСИБО,всем довольна!
                      </p>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Искала доску с большой рабочей поверхностью, так как у
                        меня много юбок и длинных платьев. На обычной доске
                        места никогда не хватает, постоянно приходится
                        отставлять утюг и перекладывать юбку. В общем, мне это
                        однажды надоело, и я нашла гладильную систему Мелия
                      </p>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                      <div className="userImg">
                        <img src={user1} alt="" />
                      </div>
                      <p>
                        Замечательная техника, просто высший класс...и продавцы
                        тоже!)
                      </p>
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
