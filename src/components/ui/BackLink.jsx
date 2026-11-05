import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const BackLink = () => (
	<Link className='back-link' to='/'>
		<FontAwesomeIcon icon={faChevronLeft} size='sm' /> Вернуться
	</Link>
);
