import '../style/global.entry.scss';
import { Open_Sans } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { AppLocale } from '../../locale/types';
import { LocaleProvider } from '../../locale/provider';
import { Header } from '../components/Header';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'ITMO News',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: AppLocale };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={openSans.className}>
        <LocaleProvider params={params}>
          <Header />
          <main className='main-content'>{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
