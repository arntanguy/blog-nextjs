import LazyLoad from 'react-lazyload';
import Iframe from 'react-iframe';

export default function Strava( { url } : { url: string }) {
  return (
    // Only load the iframe when it becomes visible to the user
    <LazyLoad height={405} offset={100}>
      <Iframe url={url}
        width="100%"
        height="405px"
        id=""
        className=""
        display="block"
        position="relative"
        allowFullScreen />
    </LazyLoad>
  )
}
