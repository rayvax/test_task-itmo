import { useLocale } from 'next-intl';
import { AppLocale } from './types';

export function useAppLocale() {
  return useLocale() as AppLocale;
}
