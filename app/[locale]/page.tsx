import { NewsList } from '../components/NewsList';
import { dispatch } from '../store';
import { fetchNews } from '../store/news/thunk';
import { useAppLocale } from '../../locale/hooks';

export default async function Home() {
  const locale = useAppLocale();
  await dispatch(fetchNews({ locale }));

  return <NewsList />;
}
