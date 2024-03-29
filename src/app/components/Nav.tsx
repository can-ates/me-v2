'use client';
import { HiHome, HiUser, HiViewColumns } from 'react-icons/hi2';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/projects', icon: <HiViewColumns /> },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      {/* inner */}
      <div className="flex h-[60px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-4 text-2xl backdrop-blur-sm md:h-[80px] md:px-40 md:py-8 md:text-3xl xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
        {navData.map((link) => {
          return (
            <Link
              className={`${link.path === pathname && 'text-accent'} group relative flex items-center transition-all duration-300 hover:text-accent`}
              key={link.name}
              href={link.path}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[3px] bg-white p-[6px] text-primary">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white" />
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
