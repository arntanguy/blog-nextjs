import Keywords from "./CVKeywords";
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const EducationDetails = ( {type, time, place, courses} : { type: string, time: string, place: string, courses?: string[] }) => {
  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {type}
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-300 text-gray-600'>
      <div className="flex items-center justify-center">
        <ClockIcon className="inline-block h-4 w-4 mr-2" /> {time}
      </div>
      <span className='mx-auto'></span>
      <div className="flex items-center justify-center">
        <MapPinIcon className="inline-block h-4 w-4 mr-2" /> {place}
      </div>
    </div>
    {
      courses && <Keywords keywords={courses} />
    }
    </>
  )
}
