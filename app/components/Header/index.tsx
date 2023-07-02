import Image from 'next/image';
import { LanguageDropdown } from '../../[locale]/LanguageDropdown';

export function Header() {
  return (
    <header className='main-header'>
      <div className='main-content content-wrapper'>
        <Image
          src='/images/logo.png'
          alt='ITMO logo'
          width={161}
          height={16}
          className='main_logo'
        />
        <div className='change-lang'>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}
