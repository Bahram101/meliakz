import React from 'react';

import utik1 from '../assets/images/utik_1.png';
import logo from '../assets/images/logo2.png';
import video from '../assets/video.mp4'

export const Home = () => {
	return (
		<>
			<section className='video-block'>
				<img src={logo} alt="лого" />
				<video className="video" src={video} autoPlay loop muted/>
			</section>
			<section className='main-block'>
				<div className='container'>
					<div className='main-block__left'>
						<h1>Умная гладильная система из Италии класса люкс</h1>
						<button>Подробное</button>
					</div>

					<div className='main-block__right'>
						<img src={utik1} alt='утюг' />
					</div>
				</div>
			</section>
			<section className='back-massager'></section>
		</>
	);
};
