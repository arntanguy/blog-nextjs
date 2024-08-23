'use client';

import { EducationDetails } from '@/app/components/portfolio/Education';
import { ExperienceDetails } from '@/app/components/portfolio/Experience';
import AnimatedTimeline from '@/app/components/portfolio/AnimatedTimeline';
import AnimatedTimelineItem from '@/app/components/portfolio/AnimatedTimelineItem';


export function handleDate(startDate: string, endDate: string)
{
  var dateStr : string = startDate ? startDate : '';
  if(endDate && startDate) { dateStr += ' - ' + endDate; }
  else if (startDate && !endDate) { dateStr += '- Present' }
  return dateStr
}

export function CVEducation( { educationSection } : { educationSection: any } )
{
  return (
    <>
    <div className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center">
      Education
    </h2>
    <AnimatedTimeline>
    {
      educationSection.map((education : any) => {
          const date = handleDate(education.startDate, education.endDate);
          return (
            <AnimatedTimelineItem>
            <EducationDetails type={education.institution} time={date} place={education.location} info={education.summary} />
            </AnimatedTimelineItem>
          )
        }
      )
    }
    </AnimatedTimeline>
    </div>
    </>
   )
}

export function CVWork( { workSection } : { workSection: any } )
{
  return (
    <>
    <div className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience 
    </h2>
    <AnimatedTimeline>
    {
      workSection.map((work : any) => {
          const date = handleDate(work.startDate, work.endDate);
          return (
            <AnimatedTimelineItem>
            <ExperienceDetails position={work.position} company={work.name} companyLink={work.url} time={date} address={work.location} work={work.summary} />
            </AnimatedTimelineItem>
          )
        }
      )
    }
    </AnimatedTimeline>
    </div>
    </>
   )
}

