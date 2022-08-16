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

function App() {

	

	return (
		<div className='App'>
			<span className="page">1/5</span>
			{/* <Routes>
				<Route path='/' element={<Layout />}>
					<Route path="" element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes> */}
			<Nav />
			<Home />
			<Footer/>
		</div>
	);
}

export default App;
