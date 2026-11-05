import { BackLink } from '../components/ui/BackLink';
import { Carousel } from '../components/ui/Carousel';
import { reviews } from '../data/reviews';
import avatar from '../assets/images/user.png';

export const Reviews = () => (
	<div className='page reviews'>
		<div className='container container--narrow'>
			<BackLink />
			<h1 className='page__title'>Отзывы клиентов</h1>
			<Carousel
				items={reviews}
				indicator='dots'
				renderItem={(text) => (
					<blockquote className='review card'>
						<img className='review__avatar' src={avatar} alt='' width='64' height='64' />
						<p>{text}</p>
					</blockquote>
				)}
			/>
		</div>
	</div>
);
