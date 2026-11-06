import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Позиция прокрутки для каждой записи истории (location.key) — живёт, пока открыта вкладка.
const positions = new Map();

/**
 * Новая страница открывается сверху, а при «Назад»/«Вперёд» —
 * на том месте, где пользователь с неё ушёл.
 */
export const useScrollRestoration = () => {
	const { key } = useLocation();
	const navigationType = useNavigationType();
	const keyRef = useRef(key);

	// Позицию запоминаем при каждой прокрутке: в момент ухода со страницы её уже не прочитать —
	// новая страница короче и браузер успевает сдвинуть scrollY.
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
		const save = () => positions.set(keyRef.current, window.scrollY);
		window.addEventListener('scroll', save, { passive: true });
		return () => window.removeEventListener('scroll', save);
	}, []);

	useLayoutEffect(() => {
		keyRef.current = key;
		const top = navigationType === 'POP' ? positions.get(key) ?? 0 : 0;
		// 'instant' — иначе сработает плавный scroll-behavior из стилей и будет видна прокрутка.
		window.scrollTo({ top, behavior: 'instant' });
	}, [key, navigationType]);
};
