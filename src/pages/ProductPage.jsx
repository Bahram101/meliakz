import { useParams } from 'react-router-dom';
import { BackLink } from '../components/ui/BackLink';
import { Carousel } from '../components/ui/Carousel';
import { DemoRequest } from '../components/ui/DemoRequest';
import { findProduct } from '../data/products';
import { NotFound } from './NotFound';

export const ProductPage = () => {
	const product = findProduct(useParams().id);
	if (!product) return <NotFound />;

	const { title, images, specs } = product;

	return (
		<div className='page product-page'>
			<div className='container'>
				<BackLink />
				<h1 className='page__title'>{title}</h1>

				<div className='product-page__grid'>
					<Carousel
						className='product-page__gallery'
						items={images}
						indicator='dots'
						renderItem={(src, i) => <img src={src} alt={`${title} — фото ${i + 1}`} />}
					/>

					<div className='product-page__specs'>
						<h2>Основные характеристики</h2>
						<dl className='specs'>
							{specs.map(([name, value]) => (
								<div className='specs__row' key={name}>
									<dt>{name}</dt>
									<dd>{value}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				<DemoRequest className='card' />
			</div>
		</div>
	);
};
