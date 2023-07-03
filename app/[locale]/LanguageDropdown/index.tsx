'use client';

import ChevronSvg from './assets/Chevron.svg';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next-intl/link';
import { languages, DefaultLanguageData } from '../../../locale/constants';
import { useAppLocale } from '../../../locale/hooks';
import { languageImages } from '../../../locale/static';
import { AppLocale, LanguageData } from '../../../locale/types';

type LanguageItemProps = { locale: AppLocale; language: LanguageData };
function LanguageItem({ language, locale }: LanguageItemProps) {
  const imgSrc = languageImages.get(locale);
  return (
    <div className='lang-item'>
      {imgSrc && <Image src={imgSrc} alt={locale} width={24} height={24} />}
      <span className='lang-title'>{language.title}</span>
    </div>
  );
}

export function LanguageDropdown() {
  const currentLocale = useAppLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`lang-dropdown ${isOpen ? 'open' : 'close'}`}>
      <div className='current-lang' onClick={() => setIsOpen((prev) => !prev)}>
        <LanguageItem
          language={languages.get(currentLocale as AppLocale) ?? DefaultLanguageData}
          locale={currentLocale}
        />

        <Image
          className='dropdown-chevron'
          src={ChevronSvg}
          alt={isOpen ? 'close' : 'open'}
          width={12}
          height={12}
        />
      </div>
      <ul className='dropdown'>
        {Array.from(languages).map(([locale, lang]) => (
          <li
            key={`lang-item-${locale}`}
            className={locale === currentLocale ? 'current-lang' : ''}
          >
            <Link href='/' locale={locale}>
              <LanguageItem language={lang} locale={locale} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
