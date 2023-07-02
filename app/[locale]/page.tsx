import { useTranslations } from 'next-intl';
import { Header } from '../components/Header';
import { NewsList } from '../components/NewsList';

export default function Home() {
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
