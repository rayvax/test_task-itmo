import { LanguageData, AppLocale } from './types';

export const DefaultLanguageData: LanguageData = { title: 'Рус' };

export const languages = new Map<AppLocale, LanguageData>([
  ['ru', DefaultLanguageData],
  ['en', { title: 'Eng' }],
]);
