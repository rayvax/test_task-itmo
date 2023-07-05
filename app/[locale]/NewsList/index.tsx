import { NewsCard, NewsCardSkeleton } from './NewsCard';
import { NEWS_PER_PAGE } from '../../api/news/constants';
import { NewsInfo } from '../../api/news/types';

export function NewsList({ newsList }: { newsList: NewsInfo[] }) {
  return (
    <div className='news-list'>
      {newsList.map((news) => (
        <NewsCard newsInfo={news} />
      ))}
    </div>
  );
}

export function NewsListSkeleton() {
  const newsPlaceholder = new Array(NEWS_PER_PAGE).fill(null);
  return (
    <div className='news-list'>
      {newsPlaceholder.map(() => (
        <NewsCardSkeleton />
      ))}
    </div>
  );
}
