import { useTranslations } from 'next-intl';
import { Header } from '../components/Header';
import { NewsList } from '../components/NewsList';
import { dispatch } from '../store';
import { fetchNews } from '../store/news/thunk';
import { useAppLocale } from '../../locale/hooks';

function HomeContent() {
  const t = useTranslations('News');

  return (
    <>
      <Header />
      <main className='main-content'>
        <h1>{t('main-title')}</h1>
        <NewsList />
      </main>
    </>
  );
}

export default async function Home() {
  const locale = useAppLocale();
  await dispatch(fetchNews({ locale }));

  return <HomeContent />;
}
