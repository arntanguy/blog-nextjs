import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa6";
import { FaStrava } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogleScholar } from "react-icons/fa6";

type SocialType = { icon: JSX.Element, url: string }

// XXX: How to make that user customizable easily?
// Include a TSX file?
export const DefaultSocials : SocialType[] = [
  { icon: <FaInstagram size="1.25rem" />, url: "https://instagram.com/arntanguy" },
  { icon: <FaGithub    size="1.25rem" />, url: "https://github.com/arntanguy" },
  { icon: <FaYoutube   size="1.25rem" />, url: "https://youtube.com/channel/UCv0xt9XhYJDzzOEhZQw2nXQ" },
  { icon: <FaPaypal    size="1.25rem" />, url: "https://www.paypal.com/donate/?hosted_button_id=U8E39BD4ZD6ZN" },
  { icon: <FaStrava    size="1.25rem" />, url: "https://www.strava.com/athletes/71520559" },
]

export const PortfolioSocials : SocialType[] = [
  { icon: <FaGithub    size="1.25rem" />, url: "https://github.com/arntanguy" },
  { icon: <FaGoogleScholar    size="1.25rem" />, url: "https://scholar.google.fr/citations?user=SeWUqycAAAAJ" },
  { icon: <FaLinkedin    size="1.25rem" />, url: "https://www.linkedin.com/in/arnaud-tanguy" },
]

export default function SocialButtons({ social = DefaultSocials, className }: { social?: SocialType[], className?: string }) {
  return (
    <>
      <div className="flex items-center my-4 lg:my-8">
    { 
      social.map((s : any) => {
       return (
        <a href={s.url} key={s.url} className={`mx-2 lg:mx-4 dark:bg-gray-700 dark:hover:bg-gray-600 p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg border-transparent border-2 hover:border-solid hover:border-orange-500 ${className}`} target="_blank" rel="noopener noreferrer">
              {s.icon}
        </a>)
      })
    }
    </div>
    </>
  )
}
