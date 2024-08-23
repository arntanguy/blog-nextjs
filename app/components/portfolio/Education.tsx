import AnimatedTimeline from './AnimatedTimeline';
import AnimatedTimelineItem from './AnimatedTimelineItem';

export const EducationDetails = ( {type, time, place, info} : { type: string, time: string, place: string, info: string }) => {
  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {type}
    </h3>
    <span className='capitalize font-medium text-gray-300/75'>
      {time} | {place}
    </span>
    <p className='font-medium w-full'>
      {info}
    </p>
    </>
  )
}

const AnimatedEducation = () => {
  return (
  <div className="my-64">
  <h2 className="font-bold text-8xl mb-32 w-full text-center">
    Education
  </h2>
  <AnimatedTimeline>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
    <AnimatedTimelineItem>
      <EducationDetails type="Bachelor Of Science In Computer Science" time="2016-2020" place="Massachusetts Institute Of Technology (MIT)" info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."/>
    </AnimatedTimelineItem>
  </AnimatedTimeline>
  </div>
  )
}


export default AnimatedEducation;
