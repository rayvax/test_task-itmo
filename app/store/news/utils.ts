import { store } from '..';
import { AppLocale } from '../../../locale/types';
import { NewsInfo } from '../../api/news/types';

const emptyNewsList: NewsInfo[] = []; //to avoid rerenders
export function getNewsList(locale: AppLocale) {
  return store.getState().news.newsLists[locale] ?? emptyNewsList;
}

export async function getNewsDetails(locale: AppLocale, newsId: number) {
  const newsList = getNewsList(locale);

  if (!newsList.length) return undefined;

  return newsList.find((news) => news.id === newsId) ?? null;
}
