import React from 'react';
import logo from '../../assets/images/logo2.png';
import video from '../../assets/video.mp4';
import './video.scss';
import { Container } from 'react-bootstrap';

export const Video = (props) => {
	const { state } = props;
	console.log('stateV', state?.destination?.index);

	const player = document.getElementById('bgVideo');
	if (player) {
		player.play();
	}

	return (
		<section className='section video-block'>
			{/* <img src={logo} alt='лого' /> */}

			<video id='bgVideo' autoPlay loop muted playsInline>
				<source src={video} type='video/mp4' />
			</video> 
		</section>
	);
};
