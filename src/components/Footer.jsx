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
						<h4>Social websites</h4>
						<div className='socialIcons'>
							<ul>
								<a
									href='https://www.instagram.com/melia_kazakhstan/?igshid=1jdbrwo3e49sd'
									target='_blank'
								>
									<li>
										<FontAwesomeIcon
											icon={faFacebookF}
											size='lg'
										/>
									</li>
								</a>
								<a
									href='https://www.instagram.com/melia_kazakhstan/?igshid=1jdbrwo3e49sd'
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
									href='https://web.whatsapp.com/send?phone=77073763659'
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
						<h4>Contact</h4>
						<ul>
							<li>
								<a href='tel:7071302100'>
									<FontAwesomeIcon
										icon={faPhone}  
									/>
									<span>+7 (707) 300-08-77</span>
								</a>
							</li>
							<li>
								<a href='mailto:meliaalmaty@gmail.com'>
									<FontAwesomeIcon
										icon={faEnvelope} 
										style
									/>
									<span> meliaalmaty@gmail.com</span>
								</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<h4>Address</h4>
						<p>мкр.Мамыр 4, д.5, г.Алматы </p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
