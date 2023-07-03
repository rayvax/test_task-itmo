import { useLocale } from 'next-intl';
import { NewsInfo } from '../../api/news/types';
import { NewsCard } from './NewsCard';

export async function NewsList() {
  const locale = useLocale();

  const newsResp = await fetch(`http://localhost:3000/api/news?locale=${locale}`);
  const newsList: NewsInfo[] = await newsResp.json();

  return (
    <div className='news-list'>
      {newsList.map((news) => (
        <NewsCard date={news.creationDate} title={news.title} imageSrc={news.imageBig} />
      ))}
    </div>
  );
}
