// Import global css style
import { Metadata } from 'next';
import '@/app/ui/global.css';
import Image from 'next/image';
import Link from 'next/link';
import { teko, prozaLibre } from '@/app/ui/fonts';
import Navigation from '@/app/components/naviagation';


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
    <main>
    <header
        className="w-full h-[40vh] lg:h-[60vh] bg-[url('/header.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className={`${teko.className} text-5xl md:text-6xl font-extrabold text-gray-300 text-center`}>Arnaud <span className="">TANGUY</span></h1>
            <h2 className={`${prozaLibre.className} uppercase mt-5 text-center text-2xl md:text-3xl lg:text-4xl text-white opacity-70 text-semibold tracking-tighter`}>Mountaineering, Ice Climbing, Photography</h2>
        </div>
      </header>
      {children}
    </main>
  );
}
