import React from 'react';

import utik1 from '../assets/images/utik_1.png';

export const Home = () => {
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
