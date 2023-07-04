import { store } from '..';

export function getNewsList() {
  return store.getState().news.newsList;
}

export async function getNewsDetails(newsId: number) {
  const newsList = getNewsList();

  if (!newsList.length) return undefined;

  return newsList.find((news) => news.id === newsId) ?? null;
}
