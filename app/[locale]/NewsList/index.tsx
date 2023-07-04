import { NewsCard, NewsCardSkeleton } from './NewsCard';
import { NEWS_PER_PAGE } from '../../api/news/constants';
import { getNewsList } from '../../store/news/utils';
import { useAppLocale } from '../../../locale/hooks';
import { dispatch } from '../../store';
import { fetchNews } from '../../store/news/thunk';

export async function NewsList() {
  let newsList = getNewsList();

  if (!newsList.length) {
    const locale = useAppLocale();
    await dispatch(fetchNews({ locale }));
    newsList = getNewsList();
  }

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
