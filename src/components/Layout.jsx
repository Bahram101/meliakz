import { Outlet } from 'react-router-dom';
import { Nnn } from './Nnn';
import { Footer } from './Footer';

export const Layout = () => {
	return (
		<>
			<Nnn />
			<Outlet />
			<Footer />
		</>
	);
};
