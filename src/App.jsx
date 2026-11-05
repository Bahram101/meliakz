import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export const App = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route index element={<Home />} />
			<Route path='product/:id' element={<ProductPage />} />
			<Route path='comments' element={<Reviews />} />
			<Route path='about' element={<About />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	</Routes>
);
