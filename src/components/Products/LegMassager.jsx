import React, { useState } from 'react';
import '../../pages/Product/product.scss';
import { Container, Row, Col } from 'react-bootstrap';
import leg1 from '../../assets/images/leg1.png';
import leg3 from '../../assets/images/leg3.png';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const LegMassager = () => {
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
		<div className='product'>
			<Container>
				<Row className='row1'>
					<a href='/'>
						<span>
							<FontAwesomeIcon icon={faChevronLeft} size='sm' />{' '}
							Вернуться
						</span>
					</a>
				</Row>
				<Row>
					<h1 className='title'>Melia Foot</h1>
				</Row>
				<Row className='row2'>
					<Col md={6} className='sliderBlock'>
						<div className='slider'>
							<>
								<div className='navigation-wrapper'>
									<div
										ref={sliderRef}
										className='keen-slider'
									>
										<div className='keen-slider__slide number-slide1'>
											<img
												src={leg1}
												alt='массажер для ног'
											/>
										</div>
										<div className='keen-slider__slide number-slide2'>
											<img
												src={leg3}
												alt='массажер для ног'
											/>
										</div>
									</div>
									{loaded && instanceRef.current && (
										<>
											<Arrow
												left
												onClick={(e) =>
													e.stopPropagation() ||
													instanceRef.current?.prev()
												}
												disabled={currentSlide === 0}
											/>

											<Arrow
												onClick={(e) =>
													e.stopPropagation() ||
													instanceRef.current?.next()
												}
												disabled={
													currentSlide ===
													instanceRef.current.track
														.details.slides.length -
														1
												}
											/>
										</>
									)}
								</div>
								{loaded && instanceRef.current && (
									<div className='dots'>
										{[
											...Array(
												instanceRef.current.track
													.details.slides.length
											).keys(),
										].map((idx) => {
											return (
												<button
													key={idx}
													onClick={() => {
														instanceRef.current?.moveToIdx(
															idx
														);
													}}
													className={
														'dot' +
														(currentSlide === idx
															? ' active'
															: '')
													}
												></button>
											);
										})}
									</div>
								)}
							</>
						</div>
					</Col>
					<Col md={6} className='feature'>
						<h3>Основные характерстики</h3>
						<table
							className='border-collapse'
							border-spacing='1'
							width='100%'
						>
							<tbody>
								<tr>
									<td>Тип:</td>
									<td className='text-right'>напольный</td>
								</tr>
								<tr>
									<td>Вид:</td>
									<td className='text-right'>
										массажавибрационный
									</td>
								</tr>
								<tr>
									<td>Зона массажа:</td>
									<td className='text-right'>колени</td>
								</tr>
								<tr>
									<td>Количество режимов работы/модулей:</td>
									<td className='text-right'>4</td>
								</tr>
								<tr>
									<td>Материал массажных элементов:</td>
									<td className='text-right'>
										текстиль, пластик
									</td>
								</tr>
								<tr>
									<td>Особенности:</td>
									<td className='text-right'>подогрев</td>
								</tr>
								<tr>
									<td>Питание:</td>
									<td className='text-right'>от сети</td>
								</tr>
								<tr>
									<td>Время работы:</td>
									<td className='text-right'>15 мин</td>
								</tr>
								<tr>
									<td>Мощность:</td>
									<td className='text-right'>55 Вт</td>
								</tr>
								<tr>
									<td>Цвет:</td>
									<td className='text-right'>
										черный, серый
									</td>
								</tr>
							</tbody>
						</table>
					</Col>
				</Row>
				<Row className='row3'>
					<Col>
						<h2>Заявка на бесплатную демонстрацию</h2>
						<div className=''>
							<div className='demoContacts'>
								<a href='tel:+77075045052'>
									<FontAwesomeIcon icon={faPhone} />
									<span style={{ marginLeft: '5px' }}>
										+7 (707) 504-50-52
									</span>
								</a>
							</div>
							<div>
								<a href='mailto:meliaalmaty@gmail.com'>
									<FontAwesomeIcon icon={faEnvelope} />
									<span style={{ marginLeft: '5px' }}>
										meliaalmaty@gmail.com
									</span>
								</a>
							</div>
							<div>г. Алматы, ул. Афцинао 34  </div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
function Arrow(props) {
	const disabeld = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabeld}`}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
		>
			{props.left && (
				<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
			)}
			{!props.left && (
				<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
			)}
		</svg>
	);
}
