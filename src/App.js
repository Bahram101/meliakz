import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import './style.scss';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import {Product} from './pages/Product'

function App() {
	return (
		<div className='App'>
			{/* <Nav />
			<Home />
			<Footer/> */}
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='about' element={<About />} />
					<Route path='/product/:id' element={<Product/>} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
