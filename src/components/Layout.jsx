import { Outlet } from 'react-router-dom';
import { Navs } from './Navs';
import { Footer } from './Footer';

export const Layout = () => {
	return (
		<>
			<Navs />
			<Outlet />
			<Footer />
		</>
	);
};
