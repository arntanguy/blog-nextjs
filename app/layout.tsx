// Import global css style
import { Metadata } from 'next';
import '@/app/ui/global.css';
import Providers from '@/app/ui/providers';
import ThemeToggle from '@/app/ui/ToggleTheme';

export const metadata: Metadata = {
  title: {
    template: '%s | Arnaud\'s Blog',
    default: 'Arnaud\'s Blog',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //  We add suppressHydrationWarning because the ThemeProvider updates
    //  this element. This only applies to the html tag itself, not its children
    <html 
      lang="en"
      suppressHydrationWarning
    >
      {/* Allows to change between light and dark theme, remember user preferences */}
      <body className="bg-gray-100 dark:bg-gray-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
