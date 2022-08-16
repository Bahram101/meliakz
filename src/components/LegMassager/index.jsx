import React from 'react';
import leg1 from '../../assets/images/leg1.png';
import './leg.scss';
import { Container, Row, Col } from 'react-bootstrap';
export const LegMassager = () => {
	return (
		<section className='section leg-massager' style={{ height: '100vh' }}>
			<Container>
				<Row>
					<Col md={6} className='leg-massager__left'>
						<div className='innerCol'>
							<img src={leg1} alt='утюг' />
						</div>
					</Col>

					<Col md={6} className='leg-massager__right'>
						<div className='innerCol'>
							<h1>Массажер для ног</h1>
							<p>
								Это три прибора в одном: утюг, отпариватель для
								одежды и гладильная доска. Гладильная доска с
								функциями поддува и отвода пара, сенсорное
								управление, давление пара – 6 Бар, классический
								дизайн и оптимальная конструкция (в форме
								передвижного столика на колесиках) – все это
								гарантирует профессиональный результат глажения
								с минимальными усилиями.
							</p>
							<button>Подробнее</button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
