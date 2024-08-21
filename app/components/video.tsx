import ReactPlayer from 'react-player'
import FullWidth from '@/app/components/FullWidth';
import clsx from 'clsx';

export default function Video ({ url, fullWidth = true, border = false } : { url: string, fullWidth?: boolean, border?: boolean }) {
  return (
    <FullWidth fullWidth={fullWidth}>
    <div className={ clsx(
    border && 'bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-full w-full py-6 sm:py-8 lg:py-12 mt-6 sm:mt-8 lg:mt-12 mb-6 sm:mb-8 lg:mb-12') }>
    <div className="relative pt-[56.25%] mt-2 mb-2">
      <ReactPlayer className="absolute top-0 left-0" url={url} width="100%" height="100%" controls />
    </div>
    </div>
    </FullWidth>
  )
}

