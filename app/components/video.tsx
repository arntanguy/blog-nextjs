import ReactPlayer from 'react-player'

export default function Video ({ url } : { url: string}) {
  return (
    <div className="relative pt-[56.25%] mt-2 mb-2">
      <ReactPlayer className="absolute top-0 left-0" url={url} width="100%" height="100%" />
    </div>
  )
}

