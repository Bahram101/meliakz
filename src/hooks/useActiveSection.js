import { useCallback, useEffect, useRef, useState } from 'react';

const SECTION_SELECTOR = ':scope > .section';

/**
 * Постраничная прокрутка (CSS scroll-snap) и номер секции, которая сейчас на экране.
 * Возвращает ref для контейнера секций, активный индекс и функцию перехода к секции.
 */
export const useActiveSection = () => {
	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.add('snap-page');

		const sections = [...containerRef.current.querySelectorAll(SECTION_SELECTOR)];
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
		containerRef.current.querySelectorAll(SECTION_SELECTOR)[index]?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return { containerRef, activeIndex, scrollTo };
};
