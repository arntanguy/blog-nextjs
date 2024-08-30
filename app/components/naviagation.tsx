'use client';

import ThemeToggle from '@/app/ui/ToggleTheme';
import Link from 'next/link';
import { AcademicCapIcon, Square2StackIcon } from '@heroicons/react/24/outline'; 
import { teko, prozaLibre } from '@/app/ui/fonts';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navigation() {
  const currentPath = usePathname();

  // Todo get current page path and highlight it if it matches one of the url
  const links = [
    { label: 'Portfolio', href: '/', icon: AcademicCapIcon },
    { label: 'Blog', href: '/blog', icon: Square2StackIcon },
  ];

  return (
    <nav className="flex items-center flex-shrink-0 justify-between flex-wrap bg-gray-200 dark:bg-gray-800 px-2">
      {
      links.map((link) => { 
        const IconComponent = link.icon;
        const isCurrentPath = link.href === currentPath;
        return ( 
          <div key={link.label}>
            <div 
            className={
            clsx(
            "flex items-center rounded-lg overflow-hidden",
            isCurrentPath ? "text-gray-800 bg-gray-300 dark:text-gray-100 dark:bg-gray-700" 
                          : "text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700",
             "mr-1 md:mr-2 lg:mr-4 px-2 py-2"
              )}>
              <IconComponent className="w-5 h-5 md:w-7 md:h-7 mr-1 md:mr-2" />
              <Link key={link.href} href={link.href} 
              className={`${prozaLibre.className}
              font-semibold text-lg md:text-xl tracking-tight lg:tracking-wider rounded-lg`}>
                {link.label}
              </Link>
              </div>
            </div> )
      })
    }
        {/* Fill space to align the remaining items to the right */}
        <div className="grow" />
        <ThemeToggle />
      </nav>
  );
}
