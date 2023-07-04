import format from 'date-fns/format';
import { languages } from '../../locale/constants';
import { AppLocale } from '../../locale/types';
import { ru } from 'date-fns/locale';

export function formatDate(timestamp: number, locale: AppLocale) {
  const dateLocale = languages.get(locale)?.dateLocale ?? ru;

  return format(timestamp, 'd MMMM yyyy', { locale: dateLocale });
}
