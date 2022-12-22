import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo3 from '../assets/images/logo3.png';
import miniLogo from '../assets/images/mini_logo.png';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';

export const Navs = () => {
	return (
		<div className='navBar'>
			<Container>
				<Link to='/'>
					<div className='nav__logo'>
						<img width='150' src={logo3} alt='Melia ' className="d-none d-md-block" />
						<img
							width='30'
							src={miniLogo}
							alt='Melia'
							className='d-block d-md-none' 
						/>
					</div>
				</Link>
				<div className='menu'>
					<a
						href='/'
						className='menu-item d-none d-md-block bottomLine'
					>
						Главная
					</a>
					<a
						href='/comments'
						className='menu-item d-none d-md-block bottomLine'
					>
						Отзывы
					</a>
					<a
						href='about'
						className='menu-item d-none d-md-block bottomLine'
					>
						О нас
					</a>
					<a
						href='tel:+77075045052'
						className='menu-item d-none d-md-block bottomLine'
					>
						+7 (707) 504-50-52
					</a>
					<a
						href='https://instagram.com/melia.kz?igshid=YmMyMTA2M2Y='
						target='_blank'
						className='menu-item'
					>
						<FontAwesomeIcon icon={faInstagram} size='lg' />
					</a>
					<a
						href='https://wa.me/77011045052' 
						target='_blank'
						className='menu-item'
					>
						<FontAwesomeIcon icon={faWhatsapp} size='lg' />
					</a>
					{[false].map((expand) => (
						<Navbar key={expand} expand={expand}>
							<Navbar.Toggle
								aria-controls={`offcanvasNavbar-expand-${expand}`}
							/>
							<Navbar.Offcanvas
								id={`offcanvasNavbar-expand-${expand}`}
								aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
								placement='end'
							>
								<Offcanvas.Header closeButton>
									{' '}
								</Offcanvas.Header>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									<ul>
										<li>
											<a href='/'> Главная</a>
										</li>
										<li>
											<a href='/comments'>Отзывы</a>
										</li>
										<li>
											<a href='/about'>О нас</a>
										</li>
									</ul>
								</Offcanvas.Title>
							</Navbar.Offcanvas>
						</Navbar>
					))}
				</div>
			</Container>
		</div>
	);
};
