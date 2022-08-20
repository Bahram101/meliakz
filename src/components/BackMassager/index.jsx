import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import back1 from '../../assets/images/back1.png';
import { Link } from 'react-router-dom';
import './back.scss';

export const BackMassager = () => {
	return (
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
							<Link to='/product/3'>
								<button>Подробнее</button>
							</Link>
						</div>
					</Col>
					<Col className='iron__right' md={6}>
						<img src={back1} alt='утюг' />
					</Col>
					<div className='btnCol'>
						<Link to='/product/3'>
							<button>Подробнее</button>
						</Link>
					</div>
				</Row>
			</Container>
		</section>
	);
};
