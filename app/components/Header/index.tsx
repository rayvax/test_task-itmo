import Image from 'next/image';
import { LanguageDropdown } from '../../[locale]/LanguageDropdown';
import Link from 'next-intl/link';

import ItmoLogo from './assets/logo.png';

export function Header() {
  return (
    <header className='main-header'>
      <div className='main-content content-wrapper'>
        <Link href='/'>
          <Image src={ItmoLogo} alt='ITMO logo' width={161} height={16} className='main_logo' />
        </Link>
        <div className='change-lang'>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}
