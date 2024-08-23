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
