import React, { useState } from 'react';

import { Video } from '../components/Video';
import { Iron } from '../components/Iron';
import { LegMassager } from '../components/LegMassager';
import { BackMassager } from '../components/BackMassager';
import ReactFullpage from '@fullpage/react-fullpage';
import { Footer } from '../components/Footer';
import { Map } from '../components/Map';

export const Home = () => {
	return (
		<ReactFullpage
			anchors={{}}
			navigation
			navigationTooltips={{}}
			navigat
			onLeave={(origin, destination, direction) => {
				console.log('onLeave event', {
					origin,
					destination,
					direction,
				});
			}}
			render={({ state, fullpageApi }) => {
				console.log('state', state);
				return (
					<div>
						<Video state={state} />
						<Iron />
						<LegMassager />
						<BackMassager />
						{/* <Map/> */}
						<Footer />
					</div>
				);
			}}
		/>
	);
};
