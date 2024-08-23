'use client';

import { EducationDetails } from '@/app/components/portfolio/Education';
import { ExperienceDetails } from '@/app/components/portfolio/Experience';
import AnimatedTimeline from '@/app/components/portfolio/AnimatedTimeline';
import AnimatedTimelineItem from '@/app/components/portfolio/AnimatedTimelineItem';
import { ResumeWorkType, ResumeEducationType } from '@/app/(portfolio)/JSONResumeSchema';



export function handleDate(startDate: string | undefined, endDate: string | undefined)
{
  var dateStr : string = startDate ? startDate : '';
  if(endDate && startDate) { dateStr += ' - ' + endDate; }
  else if (startDate && !endDate) { dateStr += '- Present' }
  return dateStr
}

export function CVEducation( { educationSection } : { educationSection: ResumeEducationType[] } )
{
  return (
    <div className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center">
      Education
    </h2>
    <AnimatedTimeline>
    {
      educationSection.map((education : ResumeEducationType) => {
          const e = education;
          if(!e) return;

          const { institution, studyType, startDate, endDate, score, area, courses } = e;
          const date = handleDate(startDate, endDate);
          return (
            <AnimatedTimelineItem key={institution + "/" + date}>
            <EducationDetails type={studyType ?? ''} time={date} place={institution ?? ''} info={courses?.join(' | ') ?? ''} />
            </AnimatedTimelineItem>
          )
        }
      )
    }
    </AnimatedTimeline>
    </div>
   )
}

export function CVWork( { workSection } : { workSection: ResumeWorkType[] } )
{
  if(!workSection) return <></>;

  return (
    <>
    <div className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience 
    </h2>
    <AnimatedTimeline>
    {
      workSection.map((workElement : ResumeWorkType) => {
          if(!workElement) throw new Error('Invalid work data ' + workElement); 

          const { name, location, position, time, address, work, startDate, endDate, summary, url} = workElement;

          const date = handleDate(startDate, endDate);
          return (
            <AnimatedTimelineItem key={name + "/" + date}>
            <ExperienceDetails position={position ?? ''} company={name ?? ''} companyLink={url} time={date} address={location ?? ''} work={summary ?? ''} />
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

