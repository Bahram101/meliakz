import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faInstagram,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const Nav = () => {
	return (
		<nav>
			<Container>
				<Link to='/'>
					<div className='nav__logo'>
						{/* <img width='38' src={{}} alt='Pizza logo' /> */}
						<h1>Logo</h1>
					</div>
				</Link>
				<div className='menu'>
					<a href='tel:+77071234567' className='menu-item tel' >
						+7 (707) 300-08-77
					</a>
					<a
						href='https://www.instagram.com/melia_kazakhstan/?igshid=1jdbrwo3e49sd'
						target='_blank'
						className='menu-item'
					>
						<FontAwesomeIcon icon={faInstagram} size='lg' />
					</a>
					<a
						href='https://web.whatsapp.com/send?phone=77071302100'
						target='_blank'
						className='menu-item'
					>
						<FontAwesomeIcon icon={faWhatsapp} size='lg' />
					</a>
				</div>
			</Container>
		</nav>
	);
};
