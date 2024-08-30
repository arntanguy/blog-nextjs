import { Metadata } from 'next';
import { motion } from 'framer-motion';
import AnimatedText from '@/app/components/portfolio/AnimatedText';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/components/portfolio/Footer';
import CVComponent from './CV';
import Image from 'next/image';
import Keyword from '@/app/components/Keyword';
import SocialButtons from '@/app/components/Social';
import { PortfolioSocials } from '@/app/components/Social';

export const metadata: Metadata = {
  title: 'Portfolio | Arnaud TANGUY',
};

export default function Page() {
  return (
    <>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 items-start justify-center">
      <div className="w-full flex flex-col items-center self-center">
          {/* <span className="text-xl">Placeholder for picture</span> */}
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
          <Image src="/portfolio/arnaud_tanguy.jpg" alt="Photo of Arnaud TANGUY" className="object-cover rounded-full" fill />
          </div>
      </div>
      <div className="w-full flex flex-col items-center self-center">
        <AnimatedText text="Software Engineer in Robotics and Computer Vision" className="!text-3xl md:!text-4xl lg:!text-6xl !text-left" />
        <p className="my-4 text-base font-medium">I am a skilled <Keyword>C++ software engineer</Keyword>  with <Keyword>8⁺ years</Keyword> of experience in <Keyword>Humanoid Robotics</Keyword> and <Keyword>Computer Vision</Keyword>. I have worked as a research engineer for both CNRS (France) and AIST (Japan) on control of state-of-the-art full size Humanoid Robots. Our work has lead to the development of the mc_rtc robotics framework.</p>
        <div className="flex items-center self-start mt-2">
          <SocialButtons social={PortfolioSocials} className="!mx-0 !mr-4 !p-3" />
          <Link href="/portfolio/cv_english.pdf" target={"_blank"} className={`
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
