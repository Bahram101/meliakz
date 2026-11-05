import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PHONE } from '../../config/site';
import { products } from '../../data/products';

export const Hero = () => (
	<section className='section hero'>
		<div className='hero__glow' aria-hidden='true' />
		<div className='container hero__content'>
			<p className='hero__kicker'>Melia Kazakhstan · комфорт дома</p>
			<h1 className='hero__title'>
				Технологии заботы <span>каждый день.</span>
			</h1>
			<p className='hero__lead'>
				Продуманные решения для ухода за одеждой и отдыха — чтобы привычные дела приносили больше комфорта.
			</p>
			<div className='hero__actions'>
				<Link className='button button--primary' to={`/product/${products[0].id}`}>
					Открыть коллекцию <FontAwesomeIcon icon={faArrowRight} />
				</Link>
				<a className='button button--ghost' href={PHONE.href}>
					Связаться с нами
				</a>
			</div>
		</div>
		<p className='hero__scroll'>Листайте вниз</p>
	</section>
);
