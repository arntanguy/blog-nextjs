// Handle JSON CV

import ReadCV from '@/app/components/portfolio/ReadCV';
import { CVEducation, CVWork } from './CVSections'; 

export default async function CVComponent()
{
  const cvData = await ReadCV({ cvName: 'cv.json' });

  return (
    <>
      <CVWork workSection={cvData.work} />
      <CVEducation educationSection={cvData.education} />
    </>
  )
}
