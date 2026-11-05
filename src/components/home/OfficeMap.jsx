import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { ADDRESS, OFFICE_COORDS } from '../../config/site';

const ZOOM = 16;
const CENTER = [OFFICE_COORDS.lat, OFFICE_COORDS.lon];

// Иконку подключаем явно: путь по умолчанию у Leaflet ломается при сборке webpack.
const officeIcon = L.icon({
	iconUrl: markerIcon,
	iconRetinaUrl: markerIcon2x,
	shadowUrl: markerShadow,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

// Маршрут — в Яндекс Картах (в их URL порядок: долгота, широта).
const ROUTE_URL = `https://yandex.ru/maps/?ll=${OFFICE_COORDS.lon}%2C${OFFICE_COORDS.lat}&z=${ZOOM}&pt=${OFFICE_COORDS.lon}%2C${OFFICE_COORDS.lat}%2Cpm2rdm`;

/**
 * Карта OpenStreetMap (Leaflet): без рекламы и счётчиков.
 * Колесо мыши листает страницу, масштаб — двойным кликом или кнопками +/−.
 * На телефоне свайп одним пальцем листает страницу, а не двигает карту.
 */
export const OfficeMap = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const map = L.map(containerRef.current, {
			center: CENTER,
			zoom: ZOOM,
			scrollWheelZoom: false,
			dragging: !L.Browser.mobile,
		});

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);

		L.marker(CENTER, { icon: officeIcon, title: `Melia — ${ADDRESS}` })
			.addTo(map)
			.bindPopup(`Melia<br>${ADDRESS}`);

		return () => map.remove();
	}, []);

	return (
		<div className='office-map'>
			<div ref={containerRef} className='office-map__canvas' role='region' aria-label={`Офис Melia на карте: ${ADDRESS}`} />
			<a className='button button--primary office-map__route' href={ROUTE_URL} target='_blank' rel='noopener noreferrer'>
				Маршрут в Яндекс Картах
			</a>
		</div>
	);
};
