import React from 'react';
import './map.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	YMaps,
	Map,
	Placemark,
	ZoomControl,
	FullscreenControl,
} from 'react-yandex-maps';

export const YandexMap = () => {
	return (
		<div className='section mapYandex' style={{ height: '100vh' }}>
			<div className='demo' style={{ height: '42vh' }}>
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<h2>Заявка на бесплатную демонстрацию</h2>
							<div className=''>
								<div className='demoContacts'>
									<a href='tel:+77011045052'>
										<FontAwesomeIcon icon={faPhone} />
										<span style={{ marginLeft: '5px' }}>
											+7 (701) 104-50-52
										</span>
									</a>
								</div>
								<div>
									<a href='mailto:meliaalmaty@gmail.com'>
										<FontAwesomeIcon icon={faEnvelope} />
										<span style={{ marginLeft: '5px' }}>
											meliaalmaty@gmail.com
										</span>
									</a>
								</div>
								<div>г. Алматы мамыр 4 дом 5</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<YMaps>
				<div style={{ height: '58vh' }}>
					<Map
						style={{ width: '100wh', height: '100vh' }}
						defaultState={{
							center: [43.215065, 76.840982],
							zoom: 15, 
						}}
					>
						<Placemark geometry={[43.215065, 76.840982]} />
						<ZoomControl options={{ float: 'left' }} />
						<FullscreenControl options={{ float: 'left' }} />
					</Map>
				</div>
			</YMaps>
		</div>
	);
};
