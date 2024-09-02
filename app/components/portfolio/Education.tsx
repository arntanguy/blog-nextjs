import React from 'react'
import Keywords from "./CVKeywords";
import { ResumeEducationType } from '@/app/(portfolio)/JSONResumeSchema';
import { DateAndLocation } from '@/app/components/portfolio/DateAndLocation';

export const EducationDetails = ( { education } : { education : ResumeEducationType }) =>
{
  const { institution, studyType, startDate, endDate, score, area, courses } = education;

  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {institution}
    </h3>

    <DateAndLocation startDate={startDate} endDate={endDate} location={area} className="mb-2 md:mb-4" />
    {
      courses && <Keywords keywords={courses} />
    }
    </>
  )
}
