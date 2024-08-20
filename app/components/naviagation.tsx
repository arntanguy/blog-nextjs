import ThemeToggle from '@/app/ui/ToggleTheme';
import Link from 'next/link';
import { AcademicCapIcon, Square2StackIcon } from '@heroicons/react/24/outline'; 
import { teko, prozaLibre } from '@/app/ui/fonts';

export default function Navigation() {
  const links = [
    { label: 'Portfolio', href: '/', icon: AcademicCapIcon },
    { label: 'Blog', href: '/blog', icon: Square2StackIcon },
  ];

  return (
    <nav className="flex items-center flex-shrink-0 justify-between flex-wrap bg-gray-200 dark:bg-gray-800 p-2">
      {
      links.map((link) => { 
        const IconComponent = link.icon;
        return ( 
          <>
            <div className="flex items-center rounded-lg overflow-hidden p-2 
            text-gray-600 hover:text-gray-800 hover:bg-gray-300 
            dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700 ">
              <IconComponent className="w-6 h-6" />
              <Link key={link.href} href={link.href} 
              className={`${prozaLibre.className}
              font-semibold text-xl tracking-wider rounded-lg p-2 sm:px-3 lg:px-4`}>
                {link.label}
              </Link>
              </div>
            </> )
      })
    }
        {/* Fill space to align the remaining items to the right */}
        <div className="grow" />
        <ThemeToggle />
      </nav>
  );
}
