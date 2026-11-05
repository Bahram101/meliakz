import { ContactList } from './ContactList';

// Блок «Заявка на бесплатную демонстрацию» — на главной и на страницах товаров.
export const DemoRequest = ({ className = '' }) => (
	<div className={`demo-request ${className}`}>
		<h2 className='demo-request__title'>Заявка на бесплатную демонстрацию</h2>
		<ContactList />
	</div>
);
