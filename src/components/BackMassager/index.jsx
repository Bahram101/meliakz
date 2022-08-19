import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import back1 from '../../assets/images/back1.png';
import { Link } from 'react-router-dom';
import './back.scss';

export const BackMassager = () => {
	return (
		// <section className='section back-massager'>
		// 	<Container>
		// 		<Row>
		// 			<Col className='back-massager__left' md={6}>
		// 				<div className='innerCol'>
		// 					<h1>
		// 						Гладильная система <b>Melia Gold</b>
		// 					</h1>
		// 					<p>
		// 						Это три прибора в одном: утюг, отпариватель для
		// 						одежды и гладильная доска. Гладильная доска с
		// 						функциями поддува и отвода пара, сенсорное
		// 						управление, давление пара – 6 Бар, классический
		// 						дизайн и оптимальная конструкция (в форме
		// 						передвижного столика на колесиках) – все это
		// 						гарантирует профессиональный результат глажения
		// 						с минимальными усилиями.
		// 					</p>
		// 					<button>Подробнее</button>
		// 				</div>
		// 			</Col>
		// 			<Col className='back-massager__right' md={6}>
		// 				 <img src={back1} alt="" />
		// 			</Col>
		// 		</Row>
		// 	</Container>
		// </section>
		<section className='section iron' style={{ height: '100vh' }}>
			<Container>
				<Row>
					<Col className='iron__left' md={6}>
						<div className='innerCol'>
							<h2 className='seatTitle'>Melia Seat</h2>
							<p>
								Melia Seat вибрационная накладка на спинку стула
								делает массаж от области шеи и лопаток до зоны
								крест- ца, целенаправленно воздействует на мышцы
								позво- ночника, выполняет деликатный массаж
								Шиацу с раз- минанием.
							</p>
							<Link to='/product/1'>
								<button>Подробнее</button>
							</Link>
						</div>
					</Col>
					<Col className='iron__right' md={6}>
						<img src={back1} alt='утюг' />
					</Col>
					<div className='btnCol'>
						<Link to='/product/1'>
							<button>Подробнее</button>
						</Link>
					</div>
				</Row>
			</Container>
		</section>
	);
};
