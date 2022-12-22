import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
	return (
		<div className='section footer'>
			<Container>
				<Row>
					<Col md={4}>
						<h4>Социальные сети</h4>
						<div className='socialIcons'>
							<ul>								
								<a
									href='https://instagram.com/melia.kz/?igshid=YmMyMTA2M2Y='
									target='_blank'
								>
									<li>
										<FontAwesomeIcon
											icon={faInstagram}
											size='lg'
										/>
									</li>
								</a>
								<a
									href='https://wa.me/77011045052'
									target='_blank'
								>
									<li>
										<FontAwesomeIcon
											icon={faWhatsapp}
											size='lg'
										/>
									</li>
								</a>
							</ul>
						</div>
					</Col>
					<Col md={4} className='contact'>
						<h4>Контакты</h4>
						<ul>
							<li>
								<a href='tel:+77075045052'>
									<FontAwesomeIcon icon={faPhone} />
									<span>+7 (707) 504 5052</span>
								</a>
							</li>
							<li>
								<a href='mailto:meliaalmaty@gmail.com'>
									<FontAwesomeIcon icon={faEnvelope} />
									<span> meliaalmaty@gmail.com</span>
								</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<h4>Адрес</h4>
						<p>г. Алматы, мкр. Мамыр 4, 5 </p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
