import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
	return (
		<header>
			<Container>
				<Link to='/'>
					<div className='header__logo'>
						{/* <img width='38' src={{}} alt='Pizza logo' /> */}
						<h1>Logo</h1>
					</div>
				</Link>
				<div className='menu'>
					<Link to="/">
						<div className='menu-item'>Главная</div>
					</Link>
					<Link to="about">
						<div className='menu-item'>О нас</div>
					</Link>
					<Link to="blog">
						<div className='menu-item'>Блог</div>
					</Link>
				</div>
			</Container>
		</header>
	);
};
