import { format } from 'date-fns';
import Image from 'next/image';

type NewsCardProps = {
  date: number;
  title: string;
  imageSrc: string;
};

export function NewsCard({ date, title, imageSrc }: NewsCardProps) {
  return (
    <div className='news-card'>
      <div className='news-card__img'>
        <Image src={imageSrc} alt='news-image' width={382} height={224} />
      </div>

      <div className='news-card__main-data'>
        <h2 className='news-card__main-data__date'>
          <time>{format(date, 'd MMMM yyyy')}</time>
        </h2>
        <p>{title}</p>
      </div>
    </div>
  );
}
