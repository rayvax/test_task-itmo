import { useAppLocale } from '../../locale/hooks';
import { NewsInfo } from '../api/news/types';
import { dispatch } from '../store';
import { fetchNews } from '../store/news/thunk';
import { getNewsList } from '../store/news/utils';
import { NewsList } from './NewsList';
import { useTranslations } from 'next-intl';

function HomeContent({ newsList }: { newsList: NewsInfo[] }) {
  const t = useTranslations('News');

  return (
    <>
      <h1>{t('main-title')}</h1>
      <NewsList newsList={newsList} />
    </>
  );
}
export default async function Home() {
  const locale = useAppLocale();
  let newsList = getNewsList(locale);

  if (!newsList.length) {
    const locale = useAppLocale();
    await dispatch(fetchNews({ locale }));
    newsList = getNewsList(locale);
  }

  return <HomeContent newsList={newsList} />;
}
