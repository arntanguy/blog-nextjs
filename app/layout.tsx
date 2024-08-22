import { Metadata } from 'next';
import '@/app/ui/global.css';
import Providers from '@/app/ui/providers';
import Navigation from '@/app/components/naviagation';

export const metadata: Metadata = {
  title: {
    template: '%s | Arnaud Tanguy',
    default: 'Portfolio',
  },
  description: 'Arnaud TANGUY\'s - Portfolio, Climbing, Mountaineering, Robotics and Photography'
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
      className="scroll-smooth"
      suppressHydrationWarning
    >
        <body className="bg-gray-100 dark:bg-gray-900">
          {/* Allows to change between light and dark theme, remember user preferences */}
          <Providers>
            <Navigation />
            {children}
          </Providers>
        </body>
      </html>
  );
}
