import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Comments } from './pages/Comments';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import './style.scss';
import { Menu } from './components/Menu';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='comments' element={<Comments />} />
					<Route path='about' element={<About />} />
					<Route path='product/:id' element={<Product />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
			<Menu/>
		</div>
	);
}

export default App;
