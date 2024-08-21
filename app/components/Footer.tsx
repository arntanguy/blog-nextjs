import { teko, prozaLibre } from '@/app/ui/fonts';
import SocialButtons from '@/app/components/Social';

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div className="w-full">
          <div className="w-2/3 mx-auto">
          <h1 className={`${teko.className} text-lg md:text-xl lg:text-2xl uppercase font-bold tracking-wider text-gray-800 dark:text-gray-200 my-4`}>Arnaud TANGUY</h1>
          <p className={`${prozaLibre.className} text-sm md:text-lg text-gray-600 dark:text-gray-400`}>Mountaineer, Photographer and Robotics Research Engineer currently based in Montpellier, France.</p>
          <SocialButtons />
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <h1 className={`${teko.className} text-lg md:text-xl lg:text-2xl uppercase font-bold tracking-wider text-gray-800 dark:text-gray-200 my-4`}>Explore Tags</h1>
        </div>
      </div>
      <div className="w-full text-center m-8">
        <p className={`${teko.className} md:text-lg text-gray-600 dark:text-gray-300 uppercase`}>2024 © Arnaud TANGUY. All rights reserved.</p>
      </div>
    </footer>
  );
}
