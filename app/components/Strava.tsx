import Iframe from 'react-iframe';

export default function Strava( { url } : { url: string }) {
  return (
    <Iframe url={url}
      width="100%"
      height="405px"
      id=""
      className=""
      display="block"
      position="relative"
      allowFullScreen />
  )
}
