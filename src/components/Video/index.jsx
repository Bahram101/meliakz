import React from 'react';
import logo from '../../assets/images/logo3.png';
import './video.scss';

export const Video = (props) => {
	const { state } = props;
	console.log('stateV', state?.destination?.index);

	const player = document.getElementById('bgVideo');
	if (player) {
		player.play();
	}

	return (
		<section className='section video-block' style={{ height: "100vh" }}>
			<img src={logo} alt='лого' />	
			{/* <video autoPlay id='bgVideo' loop muted playsInline>
				<source src={video} type='video/mp4' />
			</video> */}
		</section>
	);
};
