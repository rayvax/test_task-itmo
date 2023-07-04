import { format } from 'date-fns';
import Image from 'next/image';
import { NewsInfo } from '../../../api/news/types';
import Link from 'next-intl/link';
import { formatDate } from '../../../utils/formatDate';
import { useAppLocale } from '../../../../locale/hooks';

type NewsCardProps = {
  newsInfo: NewsInfo;
};

export function NewsCard({ newsInfo }: NewsCardProps) {
  const locale = useAppLocale();
  return (
    <Link className='news-card-anchor' href={`/news/${newsInfo.id}`}>
      <div className='news-card'>
        <div className='news-card__img'>
          <Image src={newsInfo.imageBig} alt='news-image' width={382} height={224} />
        </div>

        <div className='news-card__main-data'>
          <h2 className='news-card__main-data__date'>
            <time>{formatDate(newsInfo.creationDate, locale)}</time>
          </h2>
          <p className='news-card__main-data__title'>{newsInfo.title}</p>
        </div>
      </div>
    </Link>
  );
}

export function NewsCardSkeleton() {
  return <div className='news-card skeleton' />;
}
