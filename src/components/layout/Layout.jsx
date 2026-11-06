import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollRestoration } from '../../hooks/useScrollRestoration';

// На главной подвал — последняя секция постраничной прокрутки, поэтому его рендерит Home.
export const Layout = () => {
	const isHome = useLocation().pathname === '/';
	useScrollRestoration();

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			{!isHome && <Footer />}
		</>
	);
};
