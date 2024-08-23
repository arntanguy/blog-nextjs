import AnimatedTimeline from './AnimatedTimeline';
import AnimatedTimelineItem from './AnimatedTimelineItem';

export const ExperienceDetails = ( { position, company, companyLink, time, address, work } : { position: string, company: string, companyLink: string, time: string, address: string, work: string }) => {
  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {position} <a href={companyLink} target="_blank"
      className='capitalize text-primary dark:text-primaryDark'
    >@{company}</a>
    </h3>
    <span className='capitalize font-medium text-gray-300/75'>
      {time} | {address}
    </span>
    <p className='font-medium w-full'>
      {work}
    </p>
    </>
  )
}

const AnimatedExperience = () => {
  return (
  <div className="my-64">
  <h2 className="font-bold text-8xl mb-32 w-full text-center">
    Experience
  </h2>
  <AnimatedTimeline>
    <AnimatedTimelineItem>
      <ExperienceDetails position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <ExperienceDetails position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <ExperienceDetails position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <ExperienceDetails position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
    </AnimatedTimelineItem>
  </AnimatedTimeline>
  </div>
  )
}


export default AnimatedExperience;
