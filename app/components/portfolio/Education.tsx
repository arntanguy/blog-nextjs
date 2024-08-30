import Keywords from "./CVKeywords";

export const EducationDetails = ( {type, time, place, courses} : { type: string, time: string, place: string, courses?: string[] }) => {
  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {type}
    </h3>
    <span className='capitalize font-medium text-gray-300/75'>
      {time} | {place}
    </span>
    {
      courses && <Keywords keywords={courses} />
    }
    </>
  )
}
