import { LanguageData, AppLocale } from './types';
import { enUS, ru } from 'date-fns/esm/locale';

export const DefaultLanguageData: LanguageData = { title: 'Рус', dateLocale: ru };

export const languages = new Map<AppLocale, LanguageData>([
  ['ru', DefaultLanguageData],
  ['en', { title: 'Eng', dateLocale: enUS }],
]);
