import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Секция товара на главной. reversed — картинка слева, текст справа.
// Картинка «въезжает» при первом появлении секции на экране и дальше остаётся видимой.
export const ProductTeaser = ({ product, reversed = false, isActive = false }) => {
	const { id, title, description, images } = product;
	const [shown, setShown] = useState(isActive);

	useEffect(() => {
		if (isActive) setShown(true);
	}, [isActive]);

	const classes = ['section', 'teaser', reversed && 'teaser--reversed', shown && 'is-shown'];

	return (
		<section className={classes.filter(Boolean).join(' ')}>
			<div className='container teaser__grid'>
				<div className='teaser__text'>
					<h2 className='teaser__title'>{title}</h2>
					<p className='teaser__description'>{description}</p>
					<Link className='button button--primary' to={`/product/${id}`}>
						Подробнее
					</Link>
				</div>
				<div className='teaser__media'>
					<img src={images[0]} alt={title} loading='lazy' decoding='async' />
				</div>
			</div>
		</section>
	);
};
