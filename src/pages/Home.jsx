import { Hero } from '../components/home/Hero';
import { ProductTeaser } from '../components/home/ProductTeaser';
import { GallerySection } from '../components/home/GallerySection';
import { ContactSection } from '../components/home/ContactSection';
import { SectionDots } from '../components/home/SectionDots';
import { Footer } from '../components/layout/Footer';
import { products } from '../data/products';
import { useActiveSection } from '../hooks/useActiveSection';

// Подписи точек навигации — в том же порядке, что и секции ниже.
const SECTION_LABELS = ['Главная', ...products.map((p) => p.name), 'Клиенты и команда', 'Контакты', 'Подвал'];
const FIRST_PRODUCT_INDEX = 1;

export const Home = () => {
	const { containerRef, activeIndex, scrollTo } = useActiveSection();

	return (
		<>
			<div className='home' ref={containerRef}>
				<Hero />
				{products.map((product, i) => (
					<ProductTeaser
						key={product.id}
						product={product}
						reversed={i % 2 === 1}
						isActive={activeIndex === FIRST_PRODUCT_INDEX + i}
					/>
				))}
				<GallerySection />
				<ContactSection />
				<Footer className='section' />
			</div>
			<SectionDots labels={SECTION_LABELS} activeIndex={activeIndex} onSelect={scrollTo} />
		</>
	);
};
