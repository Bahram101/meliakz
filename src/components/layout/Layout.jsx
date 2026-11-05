import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

// На главной подвал — последняя секция постраничной прокрутки, поэтому его рендерит Home.
export const Layout = () => {
	const isHome = useLocation().pathname === '/';

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
