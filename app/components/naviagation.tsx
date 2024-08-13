import ThemeToggle from '@/app/ui/ToggleTheme';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 dark:bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight text-gray-900 dark:text-gray-100">
            Home 
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
