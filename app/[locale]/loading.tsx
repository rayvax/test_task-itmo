import { useTranslations } from 'next-intl';
import { NewsListSkeleton } from './NewsList';

function PageLoading() {
  const t = useTranslations('News');
  return (
    <>
      <h1>{t('main-title')}</h1>
      <NewsListSkeleton />;
    </>
  );
}

export default PageLoading;
