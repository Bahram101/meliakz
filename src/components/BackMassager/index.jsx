import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import back1 from '../../assets/images/back1.png';
import './back.scss'

export const BackMassager = () => {
	return (
		<section className='section back-massager' style={{height:'100vh'}}>
			<Container>
				<Row>
					<Col className='back-massager__left' md={6}>
						<div className='innerCol'>
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
								гарантирует профессиональный результат глажения
								с минимальными усилиями.
							</p>
							<button>Подробнее</button>
						</div>
					</Col>
					<Col className='back-massager__right' md={6}>
						 <img src={back1} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
