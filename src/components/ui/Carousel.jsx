import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ARROW_PATHS = {
	prev: 'M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z',
	next: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
};

const Arrow = ({ direction, disabled, onClick }) => (
	<button
		type='button'
		className='carousel__arrow'
		onClick={onClick}
		disabled={disabled}
		aria-label={direction === 'prev' ? 'Предыдущий слайд' : 'Следующий слайд'}
	>
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d={ARROW_PATHS[direction]} />
		</svg>
	</button>
);

/**
 * Универсальный слайдер: данные + функция отрисовки слайда.
 * Под слайдами по центру — стрелки и индикатор (счётчик «3 / 27» или точки).
 */
export const Carousel = ({ items, renderItem, getKey = (_, i) => i, indicator = 'counter', className = '' }) => {
	const [current, setCurrent] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		slideChanged: (instance) => setCurrent(instance.track.details.rel),
	});
	const last = items.length - 1;

	return (
		<div className={`carousel ${className}`}>
			<div ref={sliderRef} className='keen-slider'>
				{items.map((item, i) => (
					<div className='keen-slider__slide carousel__slide' key={getKey(item, i)}>
						{renderItem(item, i, current)}
					</div>
				))}
			</div>

			{last > 0 && (
				<div className='carousel__controls'>
					<Arrow direction='prev' disabled={current === 0} onClick={() => slider.current?.prev()} />

					{indicator === 'dots' ? (
						<div className='carousel__dots'>
							{items.map((item, i) => (
								<button
									key={getKey(item, i)}
									type='button'
									className={`carousel__dot${i === current ? ' is-active' : ''}`}
									aria-label={`Слайд ${i + 1}`}
									aria-current={i === current}
									onClick={() => slider.current?.moveToIdx(i)}
								/>
							))}
						</div>
					) : (
						<span className='carousel__counter' aria-live='polite'>
							{current + 1} / {items.length}
						</span>
					)}

					<Arrow direction='next' disabled={current === last} onClick={() => slider.current?.next()} />
				</div>
			)}
		</div>
	);
};
