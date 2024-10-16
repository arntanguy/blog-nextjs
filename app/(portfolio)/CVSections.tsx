'use client';

import { EducationDetails } from '@/app/components/portfolio/Education';
import { ExperienceDetails } from '@/app/components/portfolio/Experience';
import { ProjectsDetails } from '@/app/components/portfolio/Projects';
import AnimatedTimeline from '@/app/components/portfolio/AnimatedTimeline';
import AnimatedTimelineItem from '@/app/components/portfolio/AnimatedTimelineItem';
import { ResumeWorkType, ResumeEducationType, FeaturedProjectType, Robot} from '@/app/(portfolio)/JSONResumeSchema';
import { nanoid } from 'nanoid'
import { FeaturedProject } from '@/app/components/portfolio/FeaturedProject';
import { HorizontalScrollCarousel } from '@/app/components/ScrollCarousel'; 
import Carousel from '@/app/components/Carousel';
import { CarouselImage, CarouselType } from '@/app/blog/lib/definitions';

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

export function CVRobots( { robots } : { robots: Robot[] } )
{
  const cards = robots.map(robot => {
    return {
      url: robot.url,
      title: robot.name
    }
  });

  const carouselCards : CarouselImage[] = cards.map(card => {
    return {
      url: card.url,
      title: card.title
    }
  });

  const carousel : CarouselType = {
    images: carouselCards
  };

  return (
    <>
      <h2 className="font-bold text-6xl lg:text-8xl mt-8 md:mt-32 mb-8 w-full text-center">
        Robots
      </h2>
      <p className="text-xl dark:text-gray-400 text-center">I have worked with the following <span className="text-primary uppercase font-semibold tracking-wider">{robots.length} robots</span>, and more!</p>
      <div className="hidden md:block">
        <HorizontalScrollCarousel cards={cards} />
      </div>
      <div className="block md:hidden">
        <Carousel carousel={carousel} fullWidth={false} background={false} showTitle />
      </div>
    </>
  );

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
      <div className="my-16 md:my-32">
        <h2 className="font-bold text-6xl lg:text-8xl mt-8 md:mt-32 mb-8 w-full text-center">
          Projects
        </h2>
        <p className="text-xl dark:text-gray-400 text-center">I have worked on the following <span className="text-primary uppercase font-semibold tracking-wider">{projectsSection.length} projects</span>, and more!</p>
        </div>
        {/* <AnimatedTimeline> */}
          {
          projectsSection.map((projectElement : FeaturedProjectType) => {
            const w = projectElement;
            if(!w) throw new Error('Invalid work data ' + w); 

            return (
                <FeaturedProject key={nanoid()} project={w} />
            )
          }
          )
        }
        {/* </AnimatedTimeline> */}
      </div>
  )
}
