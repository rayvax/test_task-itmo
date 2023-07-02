import RusPng from './assets/ru.png';
import EngPng from './assets/en.png';
import { StaticImageData } from 'next/image';
import { AppLocale } from './types';

// export const languageImages: { [key: AppLocale]: StaticImageData } = {
//   ru: RusPng,
//   en: EngPng,
// };
export const languageImages: Map<AppLocale, StaticImageData> = new Map([
  ['ru', RusPng],
  ['en', EngPng],
]);
