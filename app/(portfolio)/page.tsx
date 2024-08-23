import { Metadata } from 'next';
import { motion } from 'framer-motion';
import AnimatedText from '@/app/components/portfolio/AnimatedText';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/components/portfolio/Footer';
import CVComponent from './CV';


export const metadata: Metadata = {
  title: 'Portfolio | Arnaud TANGUY',
};

export default function Page() {
  return (
    <>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 items-start justify-center">
      <div className="w-full flex flex-col items-center self-center">
          <span className="text-xl">Placeholder for picture</span>
      </div>
      <div className="w-full flex flex-col items-center self-center">
        <AnimatedText text="Turning Vision into Reality With Code and Design." className="!text-3xl md:!text-4xl lg:!text-6xl !text-left" />
        <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles.</p>
        <div className="flex items-center self-start mt-2">
          <Link href="/dummy.pdf" target={"_blank"} className={`
flex items-center 
bg-gray-800 text-gray-100 
dark:bg-gray-700 dark:text-gray-300 
dark:hover:bg-gray-600 dark:hover:text-gray-100
p-2.5 px-6 rounded-lg text-lg font-semiboold `} download>Resume <LinkIcon className="w-4 h-4 ml-1" /></Link>
          <Link href="mailto:arn.tanguy@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize underline">Contact</Link>
        </div>
      </div>
      </div>
        
      <CVComponent />
      <Footer />
    </>
  );
}
