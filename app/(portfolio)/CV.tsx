// Handle JSON CV

import ReadCV from '@/app/components/portfolio/ReadCV';
import { CVEducation, CVWork, CVRobots, CVProjects } from './CVSections'; 
import { sortFeaturedProjects } from '@/app/components/portfolio/FeaturedProject';

export default async function CVComponent()
{
  const cvData = await ReadCV({ cvName: 'cv.json' });
  const sortedProjects = sortFeaturedProjects( cvData.projects );

  return (
    <div className="max-w-[1600px] mx-auto w-full">
      <CVProjects projectsSection={sortedProjects} />
      <CVRobots robots={cvData.robots} />
      <CVWork workSection={cvData.work} />
      <CVEducation educationSection={cvData.education} />
    </div>
  )
}
