import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { PHONE, EMAIL, ADDRESS } from '../../config/site';

const CONTACTS = [
	{ icon: faPhone, text: PHONE.display, href: PHONE.href },
	{ icon: faEnvelope, text: EMAIL.display, href: EMAIL.href },
	{ icon: faLocationDot, text: ADDRESS },
];

// Телефон, почта и адрес. Вид задаётся модификатором: contact-list--row | contact-list--column.
export const ContactList = ({ layout = 'row' }) => (
	<ul className={`contact-list contact-list--${layout}`}>
		{CONTACTS.map(({ icon, text, href }) => {
			const content = (
				<>
					<FontAwesomeIcon icon={icon} fixedWidth /> <span>{text}</span>
				</>
			);
			return <li key={text}>{href ? <a href={href}>{content}</a> : content}</li>;
		})}
	</ul>
);
