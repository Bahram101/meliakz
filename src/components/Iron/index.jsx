import React, { useState } from 'react';
import utik1 from '../../assets/images/utik_1.png';
import utik4 from '../../assets/images/utik_4.png';
import './iron.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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
		<section className='section iron'>
			<div className='container'>
				<div className='iron__left'>
					<h1>
						Гладильная система <b>Melia Gold</b>
					</h1>
					<p>
						Это три прибора в одном: утюг, отпариватель для одежды и
						гладильная доска. Гладильная доска с функциями поддува и
						отвода пара, сенсорное управление, давление пара – 6
						Бар, классический дизайн и оптимальная конструкция (в
						форме передвижного столика на колесиках) – все это
						гарантирует профессиональный результат глажения с
						минимальными усилиями.
					</p>
					<button>Подробнее</button>
				</div>
				<div className='iron__right'>
					<div className='slider'>
						<div ref={sliderRef} className='keen-slider'>
							<div className='keen-slider__slide number-slide1'>
								<img src={utik1} alt='утюг' />
							</div>
							<div className='keen-slider__slide number-slide2'>
								<img src={utik4} alt='утюг' />
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
										instanceRef.current.track.details.slides
											.length -
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
									instanceRef.current.track.details.slides
										.length
								).keys(),
							].map((idx) => {
								return (
									<button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx);
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
				</div>
			</div>
		</section>
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
