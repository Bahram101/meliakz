import React from 'react';
import logo from '../../assets/images/logo2.png';
import video from '../../assets/video.mp4';
import './video.scss'

export const Video = () => {
	return (
		<section className='section video-block' >
			<img src={logo} alt='лого' />
			<video className='video' src={video} autoPlay loop muted />
		</section>
	);
};
