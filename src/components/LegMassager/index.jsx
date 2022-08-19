import React from 'react';
import leg1 from '../../assets/images/leg1.png';
import './leg.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const LegMassager = () => {
	return (
		<section className='section leg-massager' style={{ height: '100vh' }}>
			<Container>
				<Row>
					<Col className='leg-massager__left' md={6}>
						<div className='innerCol'>
							{/* <h2>Melia Foot</h2> */}
							<img src={leg1} alt='утюг' />
						</div>
					</Col>

					<Col className='leg-massager__right' md={6}>
						<div className='innerCol'>
							<h2>Melia Foot</h2>
							<p>
								Идеально подходит, если вы: Проводите много
								времени на каблуках и у вас ноют ноги и болят
								икры. Занимаетесь спортом и хотите быстрее
								воcстановиться после тренировки.
							</p>
							<Link to='/product/2'>
								<button>Подробнее</button>
							</Link>
						</div>
					</Col>
				</Row>

				<div className='btnCol'>
					<Link to='/product/2'>
						<button>Подробнее</button>
					</Link>
				</div>
			</Container>
		</section>
	);
};
