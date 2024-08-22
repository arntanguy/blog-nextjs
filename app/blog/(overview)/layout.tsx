// Import global css style
import { Metadata } from 'next';
import '@/app/ui/global.css';
import { teko, prozaLibre } from '@/app/ui/fonts';
import Footer from '@/app/components/Footer';


export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  return (
    <>
    <header
        className="w-full h-[40vh] lg:h-[60vh] bg-[url('/header.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className={`${teko.className} text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-300 text-center`}>Arnaud <span className="">TANGUY</span></h1>
            <h2 className={`${prozaLibre.className} uppercase mt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white opacity-70 text-semibold tracking-tighter`}>Mountaineering, Ice Climbing, Photography</h2>
        </div>
      </header>
      {children}
      <Footer />
      </>
  );
}
