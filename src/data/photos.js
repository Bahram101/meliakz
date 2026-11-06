// Фото клиентов (client_XX) и команды (XX) из src/assets/images.
const images = import.meta.glob(
	['../assets/images/[0-9]*.{jpg,jpeg}', '../assets/images/client_*.{jpg,jpeg}'],
	{ eager: true, import: 'default' }
);

// '../assets/images/client_07.jpg' → 'client_07'
const byName = Object.fromEntries(
	Object.entries(images).map(([path, url]) => [path.replace(/^.*\/|\.\w+$/g, ''), url])
);

const range = (from, to) =>
	Array.from({ length: to - from + 1 }, (_, i) => String(from + i).padStart(2, '0'));

const pick = (prefix, numbers) => numbers.map((n) => byName[prefix + n]);

// Порядок показа: сначала новые фото.
export const clientPhotos = pick('client_', [...range(19, 38), ...range(1, 18)]);

export const teamPhotos = pick('', [
	...range(15, 27),
	'04',
	'01',
	'02',
	'03',
	...range(5, 14),
]);
