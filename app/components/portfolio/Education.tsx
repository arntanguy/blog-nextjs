import React from 'react'
import Keywords from "./CVKeywords";
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ResumeEducationType } from '@/app/(portfolio)/JSONResumeSchema';
import { StartEndDate } from '@/app/components/portfolio/Date';

export const EducationDetails = ( { education } : { education : ResumeEducationType }) =>
{
  const { institution, studyType, startDate, endDate, score, area, courses } = education;

  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {institution}
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-400 text-gray-600'>
      <StartEndDate startDate={startDate} endDate={endDate} />
      <span className='mx-auto'></span>
      <div className="flex items-center justify-center">
        { area && <><MapPinIcon className="inline-block h-4 w-4 mr-2" /> {area}</> }
      </div>
    </div>
    {
      courses && <Keywords keywords={courses} />
    }
    </>
  )
}
