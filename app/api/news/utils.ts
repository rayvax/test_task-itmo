import { AppLocale } from '../../../locale/types';
import { VERSION_KEY, LANGUAGE_KEY, PER_PAGE_KEY, LEAD_KEY, NEWS_PER_PAGE } from './constants';

export const newsSearchParams = (langId: number) => {
  const searchParams = new URLSearchParams();
  searchParams.append(VERSION_KEY, '2.0');
  searchParams.append(PER_PAGE_KEY, NEWS_PER_PAGE.toString());
  searchParams.append(LEAD_KEY, String(true));
  searchParams.append(LANGUAGE_KEY, langId.toString());

  return searchParams;
};

export function toLanguageId(locale: AppLocale) {
  switch (locale) {
    case 'ru':
      return 1;
    case 'en':
      return 2;
  }
}
