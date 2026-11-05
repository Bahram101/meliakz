import { SocialLinks } from '../ui/SocialLinks';
import { ContactList } from '../ui/ContactList';

export const Footer = ({ className = '' }) => (
	<footer className={`footer ${className}`}>
		<div className='container footer__grid'>
			<div>
				<h2 className='footer__title'>Остаёмся на связи</h2>
				<SocialLinks />
			</div>
			<div>
				<h2 className='footer__title'>Контакты</h2>
				<ContactList layout='column' />
			</div>
			<p className='footer__copy'>© {new Date().getFullYear()} Melia Kazakhstan</p>
		</div>
	</footer>
);
