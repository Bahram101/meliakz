import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_LINKS } from '../../config/site';

const ICONS = { instagram: faInstagram, whatsapp: faWhatsapp };

export const SocialLinks = ({ className = '' }) => (
	<ul className={`social-links ${className}`}>
		{SOCIAL_LINKS.map(({ id, label, href }) => (
			<li key={id}>
				<a className='icon-button' href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
					<FontAwesomeIcon icon={ICONS[id]} />
				</a>
			</li>
		))}
	</ul>
);
