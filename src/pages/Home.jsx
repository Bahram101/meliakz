import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import utik1 from '../assets/images/utik_1.png';

export const Home = () => {
	
	// <ReactFullpage
	// 	anchors=""
	// 	navigation
	// 	navigationTooltips=""
	// 	navigat
	// 	sectionsColor={['#7fff00', '#00ffff', '#29ab87']}
	// 	onLeave={(origin, destination, direction) => {
	// 		console.log('onLeave event', { origin, destination, direction });
	// 	}}
	// 	render={({ state, fullpageApi }) => {
	// 		console.log('render prop change', state, fullpageApi);

	// 		return (
	// 			<div>
	// 				<section className='main-block'>
	// 					<div className='container'>
	// 						<div className='main-block__left'>
	// 							<h1>
	// 								Умная гладильная система из Италии класса
	// 								люкс
	// 							</h1>
	// 							<button>Подробное</button>
	// 						</div>

	// 						<div className='main-block__right'>
	// 							<img src={utik1} alt='утюг' />
	// 						</div>
	// 					</div>
	// 				</section>
	// 				<section className='foot-massager'></section>
	// 				<section className='back-massager'></section>
	// 			</div>
	// 		);
	// 	}}
	// />;
	return (
		<>
			<section className='main-block'>
				<div className='container'>
					<div className='main-block__left'>
						<h1>Умная гладильная система из Италии класса люкс</h1>
	        <button >Подробное</button>
					</div>

					<div className='main-block__right'>
						<img src={utik1} alt='утюг' />
					</div>
				</div>
			</section>
			<section className='foot-massager'></section>
			<section className='back-massager'></section>
		</>
	);
};
