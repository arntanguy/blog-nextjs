// Import global css style
import { Metadata } from 'next';
import '@/app/ui/global.css';
import Image from 'next/image';
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';


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
    <html lang="en">
      <body className="bg-gray-100">

        { /* hero */ }
        <div className="relative">
          <div className="relative w-full h-[500px]">
            <Link href="/">
              <Image className="object-cover" src="/header.jpg" alt="Arnaud Tanguy" fill />
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-1/2">
            <h1 className={`${teko.className} text-8xl font-bold text-gray-300`}>Arnaud TANGUY</h1>
            <h2 className={`${prozaLibre.className} uppercase font-semibold text-gray-100`}>Mountaineering, Ice Climbing, Photography</h2>
          </div>
        </div>
        { /* /hero */ }

        <div className="mt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
