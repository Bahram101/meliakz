import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo3.png';
import { NAV_LINKS, PHONE } from '../../config/site';
import { SocialLinks } from '../ui/SocialLinks';

const NavItems = ({ onNavigate }) =>
	NAV_LINKS.map(({ to, label }) => (
		<NavLink key={to} to={to} end onClick={onNavigate}>
			{label}
		</NavLink>
	));

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<header className='header'>
			<div className='container header__inner'>
				<Link to='/' className='header__logo' aria-label='Melia — главная' onClick={closeMenu}>
					<img src={logo} alt='Melia' width='132' height='31' />
				</Link>

				<nav className='header__nav' aria-label='Основная навигация'>
					<NavItems />
					<a href={PHONE.href}>{PHONE.display}</a>
				</nav>

				<div className='header__actions'>
					<SocialLinks />
					<button
						type='button'
						className='icon-button header__toggle'
						onClick={() => setMenuOpen((open) => !open)}
						aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
						aria-expanded={menuOpen}
					>
						<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
					</button>
				</div>
			</div>

			{menuOpen && (
				<nav className='mobile-menu' aria-label='Мобильная навигация'>
					<NavItems onNavigate={closeMenu} />
					<a href={PHONE.href} onClick={closeMenu}>
						Позвонить: {PHONE.display}
					</a>
				</nav>
			)}
		</header>
	);
};
