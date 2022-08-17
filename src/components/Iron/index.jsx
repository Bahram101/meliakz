import React, { useState, useRef } from 'react';
import utik1 from '../../assets/images/utik_1.png';
import './iron.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-awesome-modal';

export const Iron = () => {
	const [visible, setVisible] = useState(false);
	const ironRef = useRef()

	console.log('ironRef', ironRef)

	return (
		<>
			<section ref={ironRef}
				className='section iron'
				style={{ height: '100vh', position: 'relative' }}
			>
				<Modal
					className='modal'
					visible={visible}
					effect='fadeInUp'
					style={{ position: 'absolute !important' }}
				>
					<div className='modalContent'>
						Modal{' '}
						<span onClick={() => setVisible(false)}>Close</span>
					</div>
				</Modal>
				<Container>
					<Row>
						<Col className='iron__left' md={6}>
							<div className='innerCol'>
								<h1>
									Гладильная система <b>Melia Gold</b>
								</h1>
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
								<button onClick={() => setVisible(true)}>
									Подробнее
								</button>
							</div>
						</Col>
						<Col className='iron__right' md={6}>
							<img src={utik1} alt='утюг' />
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
