import React from 'react';
import YandexMapConstructor from 'react-yandex-maps-constructor';

export const Map = () => {
	return (
		<div className='section mapYandex' style={{ height: '100vh' }}>
			<YandexMapConstructor script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ace954db350c7437dcd3b618a7a08a0f14280493319468b0fbd296fa071b850fb&amp;width=100%&amp;height=100vh&amp;lang=ru_RU&amp;scroll=true"></script>' />
		</div>
	);
};
