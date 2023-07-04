import { NewsList } from './NewsList';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('News');
  return (
    <>
      <h1>{t('main-title')}</h1>
      <NewsList />
    </>
  );
}
