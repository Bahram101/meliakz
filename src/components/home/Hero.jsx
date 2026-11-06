import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PHONE } from '../../config/site';

export const Hero = ({ onShowProducts }) => (
	<section className='section hero'>
		<div className='hero__glow' aria-hidden='true' />
		<div className='container hero__content'>
			<h1 className='hero__title'>
				Технологии заботы <span>каждый день.</span>
			</h1>
			<p className='hero__lead'>
				Продуманные решения для ухода за одеждой и отдыха — чтобы привычные дела приносили больше комфорта.
			</p>
			<div className='hero__actions'>
				<button type='button' className='button button--primary' onClick={onShowProducts}>
					Смотреть товары <FontAwesomeIcon icon={faArrowDown} />
				</button>
				<a className='button button--ghost' href={PHONE.href}>
					Связаться с нами
				</a>
			</div>
		</div>
		<p className='hero__scroll'>Листайте вниз</p>
	</section>
);
