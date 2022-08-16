import React from 'react';

import { Video } from '../components/Video';
import { Iron } from '../components/Iron';
import { LegMassager } from '../components/LegMassager';
import { BackMassager } from '../components/BackMassager';
import ReactFullpage from '@fullpage/react-fullpage';

export const Home = () => {
	return (
		// <ReactFullpage
		// 	anchors={{}}
		// 	navigation
		// 	navigationTooltips={{}}
		// 	navigat
		// 	onLeave={(origin, destination, direction) => {
		// 		console.log('onLeave event', {
		// 			origin,
		// 			destination,
		// 			direction,
		// 		});
		// 	}}
		// 	render={({ state, fullpageApi }) => {
		// 		return (
		// 			<div>
		// 				<Video />
		// 				<Iron />
		// 				<LegMassager />
		// 				<BackMassager />
		// 			</div>
		// 		);
		// 	}}
		// />
		<div>
			<Video />
			<Iron />
			<LegMassager />
			<BackMassager />
		</div>
	);
};
