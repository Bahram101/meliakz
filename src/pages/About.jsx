import { BackLink } from '../components/ui/BackLink';
import office from '../assets/images/ofis.png';

export const About = () => (
	<div className='page about'>
		<div className='container'>
			<BackLink />
			<h1 className='page__title'>О нашей компании</h1>
			<p className='about__text'>
				Компания «Melia Kazakhstan» занимается международным маркетингом и продажей продукции Melia. Мы постоянно
				следим за научными исследованиями и внедряем инновационные технологии. У нас тысячи довольных клиентов по
				всему Казахстану.
			</p>
			<figure className='about__photo'>
				<img src={office} alt='Офис Melia Kazakhstan' />
			</figure>
		</div>
	</div>
);
