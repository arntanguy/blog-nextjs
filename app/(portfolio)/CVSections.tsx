'use client';

import { EducationDetails } from '@/app/components/portfolio/Education';
import { ExperienceDetails } from '@/app/components/portfolio/Experience';
import { ProjectsDetails } from '@/app/components/portfolio/Projects';
import AnimatedTimeline from '@/app/components/portfolio/AnimatedTimeline';
import AnimatedTimelineItem from '@/app/components/portfolio/AnimatedTimelineItem';
import { ResumeWorkType, ResumeEducationType, FeaturedProjectType } from '@/app/(portfolio)/JSONResumeSchema';
import { nanoid } from 'nanoid'
import { FeaturedProject } from '@/app/components/portfolio/FeaturedProject';

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

            return (
              <AnimatedTimelineItem key={nanoid()}>
                <EducationDetails education={e} />
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

            return (
              <AnimatedTimelineItem key={nanoid()}>
                <ExperienceDetails experience={w} />
                </AnimatedTimelineItem>
            )
          }
          )
        }
        </AnimatedTimeline>
      </div>
  )
}

export function CVProjects( { projectsSection } : { projectsSection: FeaturedProjectType[] } )
{
  if(!projectsSection) return <></>;

  return (
    <div className="w-full mx-auto">
      <CVSectionTitle title="Projects" />
        {/* <AnimatedTimeline> */}
          {
          projectsSection.map((projectElement : FeaturedProjectType) => {
            const w = projectElement;
            if(!w) throw new Error('Invalid work data ' + w); 

            return (
                <FeaturedProject project={w} />
            )
          }
          )
        }
        {/* </AnimatedTimeline> */}
      </div>
  )
}
