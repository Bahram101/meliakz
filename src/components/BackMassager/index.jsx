import React from 'react';
import back1 from '../../assets/images/back1.png';
import './back.scss'

export const BackMassager = () => {
	return (
		<section className='section back-massager'>
			<div className='container'>
				<div className='back-massager__left'>
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
				<div className='back-massager__right'>
					<img src={back1} alt='утюг' />
				</div>
			</div>
		</section>
	);
};
