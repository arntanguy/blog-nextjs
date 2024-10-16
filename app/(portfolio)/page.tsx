import { Metadata } from 'next';
import AnimatedText from '@/app/components/portfolio/AnimatedText';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/components/portfolio/Footer';
import CVComponent from './CV';
import Image from 'next/image';
import Keyword from '@/app/components/Keyword';
import SocialButtons from '@/app/components/Social';
import { PortfolioSocials } from '@/app/components/Social';
import { Suspense } from 'react' 
import { shimmer } from '@/app/ui/animations';

export const metadata: Metadata = {
  title: 'Portfolio | Arnaud TANGUY',
};

const LoadingAvatarSkeleton = () =>
{
  return (
    <div className={`${shimmer} relative overflow-hidden w-full h-full !rounded-full dark:bg-gray-700`}></div>
  )
}

export default function Page() {
  return (
    <div className="mx-auto w-full mt-4">
      <div className="h-screen my-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
          <Suspense fallback={<LoadingAvatarSkeleton />}>
            <Image src="/portfolio/arnaud_tanguy_2.jpg" alt="Photo of Arnaud TANGUY" className="object-cover rounded-full" fill />
          </Suspense>
          </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center p-2">
        <AnimatedText text="Software Engineer in Robotics and Computer Vision" className="!text-3xl md:!text-4xl lg:!text-6xl !text-left" />
        <p className="my-4 text-base font-medium">I am a skilled <Keyword>C++ software engineer</Keyword>  with <Keyword>8⁺ years</Keyword> of experience in <Keyword>Humanoid Robotics</Keyword> and <Keyword>Computer Vision</Keyword>. I have worked as a research engineer for both CNRS (France) and AIST (Japan) on control of state-of-the-art full size Humanoid Robots. Our work has lead to the development of the mc_rtc robotics framework.</p>
        <div className="flex items-center justify-center md:self-start flex-wrap mt-2">
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
    </div>
  );
}
