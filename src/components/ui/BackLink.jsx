import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * «Вернуться» — шаг назад по истории, чтобы главная открылась там, где пользователь был.
 * Если страницу открыли напрямую (по ссылке извне), истории нет — ведём на главную.
 */
export const BackLink = () => {
	const navigate = useNavigate();
	const hasAppHistory = useLocation().key !== 'default';

	const goBack = (event) => {
		if (!hasAppHistory) return;
		event.preventDefault();
		navigate(-1);
	};

	return (
		<Link className='back-link' to='/' onClick={goBack}>
			<FontAwesomeIcon icon={faChevronLeft} size='sm' /> Вернуться
		</Link>
	);
};
