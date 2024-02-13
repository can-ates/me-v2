import Link from 'next/link';

import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-y-6 py-8 md:flex-row">
          {/* logo */}
          <Link href="/">
            <span className="text-2xl">Mutlu Can </span>
            <span className="text-2xl font-thin">Ateş</span>
            <span className="text-3xl text-accent">.</span>
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
