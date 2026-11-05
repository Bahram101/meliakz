import { Link } from 'react-router-dom';

export const NotFound = () => (
	<div className='not-found'>
		<h1 className='not-found__code'>404</h1>
		<p>Такой страницы нет.</p>
		<Link className='button button--primary' to='/'>
			На главную
		</Link>
	</div>
);
