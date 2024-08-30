'use client';

import { EducationDetails } from '@/app/components/portfolio/Education';
import { ExperienceDetails } from '@/app/components/portfolio/Experience';
import AnimatedTimeline from '@/app/components/portfolio/AnimatedTimeline';
import AnimatedTimelineItem from '@/app/components/portfolio/AnimatedTimelineItem';
import { ResumeWorkType, ResumeEducationType } from '@/app/(portfolio)/JSONResumeSchema';
import { nanoid } from 'nanoid'



export function handleDate(startDate: string | undefined, endDate: string | undefined)
{
  var dateStr : string = startDate ? startDate : '';
  if(endDate && startDate) { dateStr += ' - ' + endDate; }
  else if (startDate && !endDate) { dateStr += '- Present' }
  return dateStr
}

export function CVSectionTitle( { title } : { title: string } )
{
  return (
    <div className="my-16 md:my-32">
      <h2 className="font-bold text-6xl lg:text-8xl mb-32 w-full text-center">
        {title} 
      </h2>
      </div>)
}

export function CVEducation( { educationSection } : { educationSection: ResumeEducationType[] } )
{
  return (
    <div>
      <CVSectionTitle title="Education" />
        <AnimatedTimeline>
          {
          educationSection.map((education : ResumeEducationType) => {
            const e = education;
            if(!e) return;

            const { institution, studyType, startDate, endDate, score, area, courses } = e;
            const date = handleDate(startDate, endDate);
            return (
              <AnimatedTimelineItem key={nanoid()}>
                <EducationDetails type={studyType ?? ''} time={date} place={institution ?? ''} courses={courses} />
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
    <div>
      <CVSectionTitle title="Work Experience" />
        <AnimatedTimeline>
          {
          workSection.map((workElement : ResumeWorkType) => {
            const w = workElement;
            if(!w) throw new Error('Invalid work data ' + w); 

            const { name, location, position, time, address, work, startDate, endDate, summary, highlights, keywords, url} = w;

            const date = handleDate(startDate, endDate);
            return (
              <AnimatedTimelineItem key={nanoid()}>
                <ExperienceDetails position={position ?? ''} company={name ?? ''} companyLink={url} time={date} address={location ?? ''} summary={summary} highlights={highlights} keywords={keywords} />
                </AnimatedTimelineItem>
            )
          }
          )
        }
        </AnimatedTimeline>
      </div>
  )
}

