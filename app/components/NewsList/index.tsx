import { useLocale } from 'next-intl';
import { NewsInfo } from '../../api/news/types';
import { NewsCard } from './NewsCard';
import { store } from '../../store';

export async function NewsList() {
  // const locale = useLocale();

  // const newsResp = await fetch(`http://localhost:3000/api/news?locale=${locale}`);
  // const newsList: NewsInfo[] = await newsResp.json();

  const newsList = store.getState().news.newsList;

  return (
    <div className='news-list'>
      {newsList.map((news) =>
        news ? (
          <NewsCard date={news.creationDate} title={news.title} imageSrc={news.imageBig} />
        ) : (
          <div style={{ width: '100px', height: '100px', background: 'red' }}></div>
        ),
      )}
    </div>
  );
}
