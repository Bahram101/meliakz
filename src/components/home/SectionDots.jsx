// Точки навигации по секциям главной (справа, только на десктопе).
export const SectionDots = ({ labels, activeIndex, onSelect }) => (
	<nav className='section-dots' aria-label='Разделы страницы'>
		<ul>
			{labels.map((label, i) => (
				<li key={label}>
					<button
						type='button'
						className={i === activeIndex ? 'is-active' : undefined}
						aria-label={label}
						aria-current={i === activeIndex || undefined}
						title={label}
						onClick={() => onSelect(i)}
					/>
				</li>
			))}
		</ul>
	</nav>
);
