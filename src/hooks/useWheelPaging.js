import { useEffect, useRef } from 'react';
import { getSections } from './sections';

const ANIMATION_MS = 800; // сколько длится плавный переход к секции
const INERTIA_GAP_MS = 150; // пауза между событиями колеса, после которой жест считается новым

/**
 * Один шаг колеса мыши — переход к соседней секции (как раньше в fullpage.js).
 * Секции выше экрана сначала прокручиваются обычным образом до своего края.
 * На телефонах и планшетах (без мыши) остаётся обычная прокрутка.
 */
export const useWheelPaging = (containerRef, activeIndex, scrollTo) => {
	// Обработчик колеса вешается один раз, а активную секцию читает из ref.
	const activeRef = useRef(activeIndex);
	useEffect(() => {
		activeRef.current = activeIndex;
	}, [activeIndex]);

	useEffect(() => {
		if (!window.matchMedia('(pointer: fine)').matches) return undefined;

		let lockedUntil = 0;
		let lastWheelAt = 0;
		let inertia = false;

		const onWheel = (event) => {
			if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return; // зум, горизонталь

			const now = Date.now();
			if (now - lastWheelAt >= INERTIA_GAP_MS) inertia = false;
			lastWheelAt = now;

			const direction = Math.sign(event.deltaY);
			const sections = getSections(containerRef.current);
			const current = sections[activeRef.current];
			const { top, bottom, height } = current.getBoundingClientRect();
			const viewport = window.innerHeight;

			// Высокая секция: листаем её обычной прокруткой, пока не дойдём до края.
			if (height > viewport + 2 && (direction > 0 ? bottom > viewport + 2 : top < -2)) return;

			event.preventDefault();
			if (now < lockedUntil || inertia) return; // идёт переход или тачпад ещё «докручивает»

			const target = activeRef.current + direction;
			if (target < 0 || target >= sections.length) return;

			lockedUntil = now + ANIMATION_MS;
			inertia = true;
			scrollTo(target);
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		return () => window.removeEventListener('wheel', onWheel);
	}, [containerRef, scrollTo]);
};
