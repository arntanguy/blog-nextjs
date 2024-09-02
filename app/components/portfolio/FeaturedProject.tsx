import React from 'react';
import {MediaPlayer} from '@/app/components/Carousel';
import { CarouselType } from '@/app/blog/lib/definitions';
import { FeaturedProjectType } from '@/app/(portfolio)/JSONResumeSchema'; 
import { CVSectionTitle } from '@/app/(portfolio)/CVSections';
import { DateAndLocation } from '@/app/components/portfolio/DateAndLocation';
import Markdown from 'markdown-to-jsx'
import Keywords from '@/app/components/portfolio/CVKeywords';
import CVLink from '@/app/components/portfolio/CVLink';
import {nanoid} from 'nanoid'

export default function FeaturedProjects({ projects } : { projects: FeaturedProjectType[] }) {
  return (
    <>
      <CVSectionTitle title="Featured Projects" />
      {
        projects.map((project) => (
          <FeaturedProject key={nanoid()} project={project} />
        ))
      }
    </>)
}

export function FeaturedProject( { project } : { project: FeaturedProjectType } ) {
  return (
      <div className="w-full flex min-h-[350px] my-8 md:my-16">
        <div className="w-1/2 flex items-center justify-center">
          <MediaPlayer image={project.media} className="w-2/3 h-[350px]" showTitle={false} />
        </div>
        <div className="w-1/2 px-2 md:px-8">

        <h1 className="uppercase font-bold text-xl md:text-2xl">
          <CVLink href={project.url}>{project.name}</CVLink>
        </h1>

        <DateAndLocation location={project.location} startDate={project.startDate} endDate={project.endDate} />
        <div className="text-lg w-full my-4 md:my-8">
            <Markdown>{project.description}</Markdown>
        </div>
        {
            project.keywords && <div className="flex items-center self-start m-4"><Keywords keywords={project.keywords} /></div>
        }
        </div>
      </div>
  )
}
