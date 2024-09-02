import React from 'react'
import Keywords from "./CVKeywords";
import { ResumeEducationType } from '@/app/(portfolio)/JSONResumeSchema';
import { DateAndLocation } from '@/app/components/portfolio/DateAndLocation';

export const EducationDetails = ( { education } : { education : ResumeEducationType }) =>
{
  const { institution, studyType, startDate, endDate, score, area, courses } = education;

  return (
    <>
    <h3 className="capitalize font-bold text-xl md:text-2xl">
      {studyType}<span className='text-primary dark:text-primaryDark'> @ {institution}</span>
    </h3>

    <DateAndLocation startDate={startDate} endDate={endDate} className="mb-2 md:mb-4" />
    {
      courses && <Keywords keywords={courses} />
    }
    </>
  )
}
