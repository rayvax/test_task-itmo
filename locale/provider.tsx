import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { AppLocale } from './types';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

type LocaleProviderProps = {
  children: React.ReactNode;
  params: { locale: AppLocale };
};
export async function LocaleProvider({ children, params: { locale } }: LocaleProviderProps) {
  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
