import { Carousel } from '../ui/Carousel';
import { clientPhotos, teamPhotos } from '../../data/photos';

const GALLERIES = [
	{ title: 'Наши счастливые клиенты', alt: 'Клиенты Melia', photos: clientPhotos },
	{ title: 'Наша команда', alt: 'Команда Melia', photos: teamPhotos },
];

// Фото целиком в рамке 4:3, поля — размытая копия снимка.
// Фото и фон грузим только для текущего и соседних слайдов.
const PhotoFrame = ({ src, alt, isNear }) => (
	<div className='photo-frame' style={isNear ? { '--photo': `url(${src})` } : undefined}>
		<img src={src} alt={alt} loading={isNear ? 'eager' : 'lazy'} decoding='async' />
	</div>
);

export const GallerySection = () => (
	<section className='section gallery'>
		<div className='container gallery__grid'>
			{GALLERIES.map(({ title, alt, photos }) => (
				<div key={title}>
					<h2 className='gallery__title'>{title}</h2>
					<Carousel
						items={photos}
						getKey={(src) => src}
						renderItem={(src, i, current) => (
							<PhotoFrame src={src} alt={`${alt} — фото ${i + 1}`} isNear={Math.abs(i - current) <= 1} />
						)}
					/>
				</div>
			))}
		</div>
	</section>
);
