// Handle JSON CV

import ReadCV from '@/app/components/portfolio/ReadCV';
import { CVEducation, CVWork, CVProjects } from './CVSections'; 
import FeaturedProjects from '@/app/components/portfolio/FeaturedProject';

export default async function CVComponent()
{
  const cvData = await ReadCV({ cvName: 'cv.json' });

  return (
    <>
      <FeaturedProjects projects={cvData.featuredProjects} />
      <CVProjects projectsSection={cvData.projects} />
      <CVWork workSection={cvData.work} />
      <CVEducation educationSection={cvData.education} />
    </>
  )
}
