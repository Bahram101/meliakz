import React, { useState, useRef } from 'react';
import utik1 from '../../assets/images/utik_1.png';
import './iron.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

export const Iron = () => {
	return (
		<>
			<section
				className='section iron'
				style={{ height: '100vh', position: 'relative' }}
			>
				<Container>
					<Row>
						<Col className='iron__left' md={6}>
							<div className='innerCol'>
								<h2>Гладильная система Melia Gold</h2>
								<p>
									Это три прибора в одном: утюг, отпариватель
									для одежды и гладильная доска. Гладильная
									доска с функциями поддува и отвода пара,
									сенсорное управление, давление пара – 6 Бар,
									классический дизайн и оптимальная
									конструкция (в форме передвижного столика на
									колесиках) – все это гарантирует
									профессиональный результат глажения с
									минимальными усилиями.
								</p>
								<Link to='/product/1'>
									<button>Подробнее</button>
								</Link>
							</div>
						</Col>
						<Col className='iron__right' md={6}>
							<img src={utik1} alt='утюг' />
						</Col>
						<div className="btnCol">
							<Link to='/product/1'>
								<button>Подробнее</button>
							</Link>
						</div>
					</Row>
				</Container>
			</section>
		</>
	);
};
