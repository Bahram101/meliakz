// Фото клиентов (client_XX) и команды (XX) из src/assets/images.
const images = require.context('../assets/images', false, /^\.\/(client_)?\d+\.jpe?g$/);

const byName = Object.fromEntries(
	images.keys().map((key) => [key.replace(/^\.\/|\.\w+$/g, ''), images(key)])
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
