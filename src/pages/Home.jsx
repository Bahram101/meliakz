import React from 'react';

import logo from '../assets/images/logo2.png';
import video from '../assets/video.mp4';
import { Iron } from '../components/Iron';
import { LegMassager } from '../components/LegMassager';
import { BackMassager } from '../components/BackMassager';

export const Home = () => {
	return (
		<div className="sections">
			<section className='section video-block'>
				<img src={logo} alt='лого' />
				<video className='video' src={video} autoPlay loop muted />
			</section>
			<Iron />
			<LegMassager />
			<BackMassager />
		</div>
	);
};
