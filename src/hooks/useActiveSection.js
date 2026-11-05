import { useCallback, useEffect, useRef, useState } from 'react';
import { useWheelPaging } from './useWheelPaging';
import { getSections } from './sections';

/**
 * Постраничная прокрутка главной и номер секции, которая сейчас на экране.
 * Возвращает ref для контейнера секций, активный индекс и функцию перехода к секции.
 */
export const useActiveSection = () => {
	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.add('snap-page');

		const sections = getSections(containerRef.current);
		const observer = new IntersectionObserver(
			(entries) =>
				entries
					.filter((entry) => entry.isIntersecting)
					.forEach((entry) => setActiveIndex(sections.indexOf(entry.target))),
			// Активна секция, которая пересекает середину экрана, — работает при любой её высоте.
			{ rootMargin: '-50% 0px -50% 0px' }
		);
		sections.forEach((section) => observer.observe(section));

		return () => {
			observer.disconnect();
			root.classList.remove('snap-page');
		};
	}, []);

	const scrollTo = useCallback((index) => {
		getSections(containerRef.current)[index]?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	useWheelPaging(containerRef, activeIndex, scrollTo);

	return { containerRef, activeIndex, scrollTo };
};
