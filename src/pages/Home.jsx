import React from 'react';

import utik1 from '../assets/images/utik_1.png';
import leg1 from '../assets/images/leg1.png';
import logo from '../assets/images/logo2.png';
import video from '../assets/video.mp4';

export const Home = () => {
	return (
		<>
			<section className='device video-block'>
				<img src={logo} alt='лого' />
				<video className='video' src={video} autoPlay loop muted />
			</section>
			<section className='device iron-block'>
				<div className='container'>
					<div className='iron-block__left'>
						<h1>
							Гладильная система <b>Melia Gold</b>
						</h1>
						<p>
							Это три прибора в одном: утюг, отпариватель для
							одежды и гладильная доска. Гладильная доска с
							функциями поддува и отвода пара, сенсорное
							управление, давление пара – 6 Бар, классический
							дизайн и оптимальная конструкция (в форме
							передвижного столика на колесиках) – все это
							гарантирует профессиональный результат глажения с
							минимальными усилиями.
						</p>
						<button>Подробное</button>
					</div>
					<div className='iron-block__right'>
						<img src={utik1} alt='утюг' />
					</div>
				</div>
			</section>
			<section className='device leg-massager-block'>
				<div className='container'>
					<div className='leg-massager-block__left'>
						<img src={leg1} alt='утюг' />
					</div>
					<div className='leg-massager-block__right'>
						<h1>Массажер для ног</h1>
						<p>
							Это три прибора в одном: утюг, отпариватель для
							одежды и гладильная доска. Гладильная доска с
							функциями поддува и отвода пара, сенсорное
							управление, давление пара – 6 Бар, классический
							дизайн и оптимальная конструкция (в форме
							передвижного столика на колесиках) – все это
							гарантирует профессиональный результат глажения с
							минимальными усилиями.
						</p>
						<button>Подробное</button>
					</div>
				</div>
			</section>
		</>
	);
};
